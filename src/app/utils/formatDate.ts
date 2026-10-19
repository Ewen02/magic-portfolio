type DateLocale = "fr" | "en";

// "2026-10-19" or "2026-10-19T10:00:00" → "19 octobre 2026" / "October 19, 2026".
export function formatDate(date: string, locale: DateLocale = "fr", style: "long" | "short" = "long") {
  const parsed = new Date(date.includes("T") ? date : `${date}T00:00:00`);
  return parsed.toLocaleDateString(locale === "en" ? "en-US" : "fr-FR", {
    day: "numeric",
    month: style === "long" ? "long" : "short",
    year: "numeric",
  });
}

// Non-breaking spaces where a line must not break: before French double
// punctuation (« : », « ? », « ! », « ; »), inside « 1 330 » and between a number
// and its unit.
export function typeset(text: string) {
  return text
    .replace(/ ([:;?!])/g, "\u00a0$1")
    .replace(/(\d) (?=\d{3}\b)/g, "$1\u00a0")
    .replace(/(\d) (Mo|Ko|Go|MB|KB|GB|ms|s|min|%|€|\$)(?=[\s,.;:)!?]|$)/g, "$1\u00a0$2");
}

// Minutes to read, at about 200 words per minute; code blocks count too.
export function readingTime(content: string) {
  return Math.max(1, Math.round(content.trim().split(/\s+/).length / 200));
}
