param(
  [string]$SourceUrl = "https://drive.usercontent.google.com/download?id=1W0algsCcY671wriIHv7XLCmq-xt2Iuqk&export=download&confirm=t",
  [string]$WorkbookPath,
  [string]$OutputPath = "assets/data/eventos.json"
)

$ErrorActionPreference = "Stop"
$temporaryWorkbook = $null

function Read-ZipEntryText {
  param($Archive, [string]$EntryName)
  $entry = $Archive.GetEntry($EntryName)
  if (-not $entry) { throw "Arquivo interno não encontrado: $EntryName" }
  $reader = [System.IO.StreamReader]::new($entry.Open())
  try { return $reader.ReadToEnd() } finally { $reader.Dispose() }
}

function Get-ExcelColumnIndex {
  param([string]$CellReference)
  $letters = $CellReference -replace '[^A-Z]', ''
  $index = 0
  foreach ($character in $letters.ToCharArray()) {
    $index = ($index * 26) + ([int][char]$character - [int][char]'A' + 1)
  }
  return $index - 1
}

function Get-CellValue {
  param($Cell, [string[]]$SharedStrings)
  if (-not $Cell) { return $null }
  $valueNode = $Cell.SelectSingleNode('./*[local-name()="v"]')
  if ($Cell.t -eq 's' -and $valueNode) { return $SharedStrings[[int]$valueNode.InnerText] }
  if ($Cell.t -eq 'inlineStr') {
    return (($Cell.SelectNodes('.//*[local-name()="t"]') | ForEach-Object { $_.InnerText }) -join '')
  }
  if ($valueNode) { return $valueNode.InnerText }
  return $null
}

function Convert-Number {
  param($Value)
  if ([string]::IsNullOrWhiteSpace([string]$Value)) { return 0 }
  $parsed = 0.0
  if ([double]::TryParse([string]$Value, [Globalization.NumberStyles]::Any, [Globalization.CultureInfo]::InvariantCulture, [ref]$parsed)) {
    return [Math]::Round($parsed, 2)
  }
  return 0
}

function Convert-ExcelSerial {
  param($Value)
  $parsed = 0.0
  if ([double]::TryParse([string]$Value, [Globalization.NumberStyles]::Any, [Globalization.CultureInfo]::InvariantCulture, [ref]$parsed)) {
    return $parsed
  }
  return 0
}

try {
  if (-not $WorkbookPath) {
    $temporaryWorkbook = Join-Path ([System.IO.Path]::GetTempPath()) ("eventos-" + [Guid]::NewGuid().ToString('N') + '.xlsm')
    Invoke-WebRequest -Uri $SourceUrl -OutFile $temporaryWorkbook -MaximumRedirection 10
    $WorkbookPath = $temporaryWorkbook
  }

  $resolvedWorkbook = (Resolve-Path -LiteralPath $WorkbookPath).Path
  $signature = [System.IO.File]::ReadAllBytes($resolvedWorkbook)[0..1]
  if ($signature[0] -ne 0x50 -or $signature[1] -ne 0x4B) {
    throw "O Google Drive não entregou um arquivo Excel. Confirme que a planilha está como 'Qualquer pessoa com o link — Leitor'."
  }

  Add-Type -AssemblyName System.IO.Compression.FileSystem
  $archive = [System.IO.Compression.ZipFile]::OpenRead($resolvedWorkbook)
  try {
    [xml]$workbookXml = Read-ZipEntryText $archive 'xl/workbook.xml'
    [xml]$relationshipsXml = Read-ZipEntryText $archive 'xl/_rels/workbook.xml.rels'
    [xml]$sharedStringsXml = Read-ZipEntryText $archive 'xl/sharedStrings.xml'

    $sharedStrings = @($sharedStringsXml.SelectNodes('//*[local-name()="si"]') | ForEach-Object {
      ($_.SelectNodes('.//*[local-name()="t"]') | ForEach-Object { $_.InnerText }) -join ''
    })

    $eventSheet = $workbookXml.SelectSingleNode('//*[local-name()="sheet" and @name="Eventos"]')
    if (-not $eventSheet) { throw "A aba 'Eventos' não foi encontrada." }
    $relationshipId = $eventSheet.GetAttribute('id', 'http://schemas.openxmlformats.org/officeDocument/2006/relationships')
    $relationship = $relationshipsXml.SelectSingleNode("//*[local-name()='Relationship' and @Id='$relationshipId']")
    if (-not $relationship) { throw "Não foi possível localizar o arquivo interno da aba 'Eventos'." }
    $sheetPath = 'xl/' + $relationship.Target.TrimStart('/')
    [xml]$sheetXml = Read-ZipEntryText $archive $sheetPath

    $rows = @($sheetXml.SelectNodes('//*[local-name()="sheetData"]/*[local-name()="row"]'))
    if ($rows.Count -lt 2) { throw "A aba 'Eventos' não contém registros." }

    $headers = @{}
    foreach ($cell in $rows[0].SelectNodes('./*[local-name()="c"]')) {
      $headers[(Get-ExcelColumnIndex $cell.r)] = Get-CellValue $cell $sharedStrings
    }

    $events = @()
    foreach ($row in $rows | Select-Object -Skip 1) {
      $values = @{}
      foreach ($cell in $row.SelectNodes('./*[local-name()="c"]')) {
        $columnIndex = Get-ExcelColumnIndex $cell.r
        $header = $headers[$columnIndex]
        if ($header) { $values[$header] = Get-CellValue $cell $sharedStrings }
      }
      if ([string]::IsNullOrWhiteSpace([string]$values['ID'])) { continue }

      $serialDate = Convert-ExcelSerial $values['Data e hora']
      if ($serialDate -le 0) { continue }
      $date = [DateTime]::FromOADate($serialDate).ToString('yyyy-MM-ddTHH:mm:ss')
      $received = Convert-Number $values['Valor Recebido']

      $events += [ordered]@{
        id = [string]$values['ID']
        date = $date
        type = [string]$values['Tipo']
        group = [string]$values['Grupo']
        debtor = [string]$values['Contratante / Devedor']
        title = [string]$values['Evento']
        client = [string]$values['Noivos / Cliente']
        venue = [string]$values['Local']
        scheduleStatus = [string]$values['Status Agenda']
        expected = Convert-Number $values['Valor Previsto']
        received = $received
        financialStatus = [string]$values['Status Financeiro']
        notes = [string]$values['Observações']
        calendarUrl = [string]$values['Link do Calendar']
        competence = [string]$values['Competência']
      }
    }
  } finally {
    $archive.Dispose()
  }

  $events = @($events | Sort-Object { [DateTime]$_.date }, id)
  $newEventsJson = ConvertTo-Json @($events) -Depth 8 -Compress
  $sha256 = [System.Security.Cryptography.SHA256]::Create()
  try {
    $sourceHash = ([BitConverter]::ToString($sha256.ComputeHash([Text.Encoding]::UTF8.GetBytes($newEventsJson)))).Replace('-', '').ToLowerInvariant()
  } finally {
    $sha256.Dispose()
  }
  $existingSyncedAt = $null
  $changed = $true
  if (Test-Path -LiteralPath $OutputPath) {
    try {
      $existing = Get-Content -LiteralPath $OutputPath -Raw | ConvertFrom-Json
      if ($existing.sourceHash -eq $sourceHash) {
        $changed = $false
        $existingSyncedAt = $existing.syncedAt
      }
    } catch { }
  }

  $payload = [ordered]@{
    version = 1
    sourceFileId = '1W0algsCcY671wriIHv7XLCmq-xt2Iuqk'
    sourceTitle = 'Controle de Caixa - Eventos - Felipe Figueroa.xlsm'
    sourceHash = $sourceHash
    syncedAt = if ($existingSyncedAt) { $existingSyncedAt } else { [DateTime]::UtcNow.ToString('o') }
    syncIntervalMinutes = 30
    events = $events
  }

  $outputDirectory = Split-Path -Parent $OutputPath
  if ($outputDirectory) { New-Item -ItemType Directory -Force -Path $outputDirectory | Out-Null }
  $json = ConvertTo-Json $payload -Depth 8
  [System.IO.File]::WriteAllText((Join-Path (Get-Location) $OutputPath), $json + [Environment]::NewLine, [System.Text.UTF8Encoding]::new($false))
  Write-Host "Eventos sincronizados: $($events.Count). Alterações: $changed"
} finally {
  if ($temporaryWorkbook -and (Test-Path -LiteralPath $temporaryWorkbook)) {
    Remove-Item -LiteralPath $temporaryWorkbook -Force
  }
}
