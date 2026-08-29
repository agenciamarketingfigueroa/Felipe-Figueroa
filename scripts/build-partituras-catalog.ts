const [sourceDir, outputPath] = Deno.args;

if (!sourceDir || !outputPath) {
  console.error("Uso: deno run --allow-read --allow-write scripts/build-partituras-catalog.ts <diretório> <saída>");
  Deno.exit(1);
}

const leadingArtists = new Set([
  "Bruna Brant",
  "Colo de Deus",
  "Eduardo Augusto",
  "Eliana Ribeiro",
  "Frei Gilson",
  "Isadora Pompeu",
  "Jeito Ágape",
]);

const featureMatchers = [
  ["Simplificada", /simplificad/i],
  ["Reduzida", /reduzid/i],
  ["Incompleta", /incomplet/i],
  ["Somente refrão", /refr[aã]o/i],
  ["Violão", /viol[aã]o/i],
  ["Capotraste", /\bcapo(?:traste)?\b/i],
  ["Versão antiga", /antiga/i],
] as const;

function compact(value: string) {
  return value.replace(/\s+/g, " ").replace(/\s+([,)])/g, "$1").trim();
}

function searchKey(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function stripParenthetical(value: string, details: string[]) {
  return compact(value.replace(/\(([^)]+)\)/g, (full, inner: string) => {
    const content = compact(inner);
    if (/^[A-G](?:#|b)?m?$/.test(content)) return "";
    if (/^-?\d+$/.test(content)) return "";
    if (featureMatchers.some(([, matcher]) => matcher.test(content))) return "";
    details.push(content);
    return "";
  }));
}

type Score = {
  id: string;
  title: string;
  artist: string;
  key: string;
  features: string[];
  details: string[];
  variantCount: number;
  search: string;
};

type Song = {
  id: string;
  title: string;
  artists: string[];
  keys: string[];
  features: string[];
  details: string[];
  versions: number;
  search: string;
};

type CatalogResult = {
  id: string;
  title: string;
  artist: string;
  key: string;
  features: string[];
  details: string[];
  files: number;
  search: string;
};

const entries: string[] = [];
for await (const entry of Deno.readDir(sourceDir)) {
  if (entry.isFile && entry.name.toLowerCase().endsWith(".pdf")) entries.push(entry.name.normalize("NFC"));
}

const parsed = entries.map((filename, index) => {
  const originalStem = filename.replace(/\.pdf$/i, "").trim();
  const isCopy = /\s*-\s*c[oó]pia$/i.test(originalStem) || /\s+2$/i.test(originalStem);
  let stem = originalStem.replace(/\s*-\s*c[oó]pia$/i, "").replace(/\s+2$/i, "").trim();
  const parts = stem.split(/\s+-\s*|\s*-\s+/).map(compact).filter(Boolean);
  const leadingArtist = parts.length > 1 && leadingArtists.has(parts[0]);
  let titleRaw = parts.length > 1 ? (leadingArtist ? parts.slice(1).join(" - ") : parts[0]) : stem;
  let artistRaw = parts.length > 1 ? (leadingArtist ? parts[0] : parts.slice(1).join(" - ")) : "Não informado";

  const keyMatch = stem.match(/\(([A-G](?:#|b)?m?)\)/);
  const transposeMatch = stem.match(/\((-\d+)\)/);
  const key = keyMatch?.[1] || (transposeMatch ? `${transposeMatch[1]} tom` : "");
  const details: string[] = [];
  titleRaw = stripParenthetical(titleRaw, details);
  artistRaw = stripParenthetical(artistRaw, details);

  const features: string[] = featureMatchers.filter(([, matcher]) => matcher.test(stem)).map(([label]) => label);
  if (/\+|medley|pout\s*pourri/i.test(stem)) features.push("Medley");
  if (/\(-\d+\)/.test(stem)) features.push("Tom alternativo");
  if (isCopy) features.push("Versão alternativa");

  const title = compact(titleRaw.replace(/\s+[-–—]\s*$/, "")) || originalStem;
  const artist = compact(artistRaw) || "Não informado";
  const uniqueDetails = [...new Set(details.filter(detail => searchKey(detail) !== searchKey(artist)))];
  const uniqueFeatures = [...new Set(features)];
  const group = searchKey(title).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return {
    id: `${group || "partitura"}-${String(index + 1).padStart(3, "0")}`,
    title,
    artist,
    key,
    features: uniqueFeatures,
    details: uniqueDetails,
    variantCount: 1,
    search: searchKey([title, artist, key, ...uniqueFeatures, ...uniqueDetails].join(" ")),
    group,
  };
});

const groupCounts = new Map<string, number>();
for (const score of parsed) groupCounts.set(score.group, (groupCounts.get(score.group) || 0) + 1);

const catalog: Score[] = parsed
  .map(({ group, ...score }) => ({ ...score, variantCount: groupCounts.get(group) || 1 }))
  .sort((a, b) => a.title.localeCompare(b.title, "pt-BR") || a.artist.localeCompare(b.artist, "pt-BR") || a.key.localeCompare(b.key, "pt-BR"));

const songGroups = new Map<string, Score[]>();
for (const score of catalog) {
  const group = searchKey(score.title).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  songGroups.set(group, [...(songGroups.get(group) || []), score]);
}

const songs: Song[] = [...songGroups.entries()].map(([group, scores]) => {
  const title = scores[0].title;
  const artists = [...new Set(scores.map(score => score.artist))].sort((a, b) => a.localeCompare(b, "pt-BR"));
  const keys = [...new Set(scores.map(score => score.key).filter(Boolean))];
  const features = [...new Set(scores.flatMap(score => score.features))].filter(feature => feature !== "Versão alternativa");
  const details = [...new Set(scores.flatMap(score => score.details))];
  return {
    id: group,
    title,
    artists,
    keys,
    features,
    details,
    versions: scores.length,
    search: searchKey([title, ...artists, ...keys, ...features, ...details].join(" ")),
  };
}).sort((a, b) => a.title.localeCompare(b.title, "pt-BR"));

const resultGroups = new Map<string, Score[]>();
for (const score of catalog) {
  const group = [searchKey(score.title), searchKey(score.artist), searchKey(score.key)].join("|");
  resultGroups.set(group, [...(resultGroups.get(group) || []), score]);
}

const results: CatalogResult[] = [...resultGroups.entries()].map(([group, scores]) => {
  const first = scores[0];
  const features = [...new Set(scores.flatMap(score => score.features))].filter(feature => feature !== "Versão alternativa");
  const details = [...new Set(scores.flatMap(score => score.details))];
  return {
    id: group.replace(/[^a-z0-9|]+/g, "-").replace(/\|/g, "--"),
    title: first.title,
    artist: first.artist,
    key: first.key,
    features,
    details,
    files: scores.length,
    search: searchKey([first.title, first.artist, first.key, ...features, ...details].join(" ")),
  };
}).sort((a, b) => a.title.localeCompare(b.title, "pt-BR") || a.artist.localeCompare(b.artist, "pt-BR") || a.key.localeCompare(b.key, "pt-BR"));

const metadata = {
  files: catalog.length,
  songs: new Set(parsed.map(item => item.group)).size,
  artists: new Set(catalog.map(item => item.artist).filter(artist => artist !== "Não informado")).size,
  keyed: catalog.filter(item => item.key).length,
};

const output = `globalThis.PARTITURAS_CATALOG = ${JSON.stringify(catalog, null, 2)};\n` +
  `globalThis.PARTITURAS_SONGS = ${JSON.stringify(songs, null, 2)};\n` +
  `globalThis.PARTITURAS_RESULTS = ${JSON.stringify(results, null, 2)};\n` +
  `globalThis.PARTITURAS_CATALOG_META = ${JSON.stringify(metadata, null, 2)};\n`;

await Deno.writeTextFile(outputPath, output);
console.log(JSON.stringify(metadata));
