const DFV_SPREADSHEET_ID = "16L1aK5sfbZit9H6yCTn8kvzimCzl855zKtKts9J5VIM";
const DFV_SHEET_NAME = "Inscrições";

function doPost(e) {
  const data = e && e.parameter ? e.parameter : {};

  // Campo invisível: robôs costumam preenchê-lo, pessoas não.
  if (data.website) return jsonResponse({ ok: true });

  if (!data.name || !data.email || !data.whatsapp) {
    return jsonResponse({ ok: false, error: "Campos obrigatórios ausentes." });
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const spreadsheet = SpreadsheetApp.openById(DFV_SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(DFV_SHEET_NAME);

    if (!sheet) throw new Error("A aba de inscrições não foi encontrada.");

    sheet.appendRow([
      new Date(),
      safeCell(data.name),
      safeCell(data.email),
      safeCell(data.whatsapp),
      safeCell(data.event),
      safeCell(data.utm_source),
      safeCell(data.utm_medium),
      safeCell(data.utm_campaign),
      safeCell(data.utm_content),
      safeCell(data.utm_term),
      safeCell(data.source_url),
      safeCell(data.consent),
    ]);

    SpreadsheetApp.flush();
    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error.message || error) });
  } finally {
    lock.releaseLock();
  }
}

function safeCell(value) {
  const text = String(value || "").trim();
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
