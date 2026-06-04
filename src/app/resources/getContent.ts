import * as fr from "@/app/resources/content";
import * as en from "@/app/resources/content.en";

export type Locale = "fr" | "en";

// Bundles all structured content objects for a given locale.
//
// FR is the source of truth (`content.js`); EN lives in `content.en.js` and
// mirrors the exact same shape with translated text. Per-key fallback to FR
// guards against any field that might be missing from the EN file.
export function getContent(locale: Locale) {
  const base = fr as Record<string, unknown>;
  const localized = (locale === "en" ? en : fr) as Record<string, unknown>;
  const pick = (key: string) => localized[key] ?? base[key];

  return {
    person: pick("person"),
    social: pick("social"),
    newsletter: pick("newsletter"),
    home: pick("home"),
    about: pick("about"),
    blog: pick("blog"),
    work: pick("work"),
    uses: pick("uses"),
    services: pick("services"),
    contact: pick("contact"),
    keywords: pick("keywords"),
  } as ReturnType<typeof frBundle>;
}

// Type anchor: the FR bundle defines the canonical shape consumers rely on.
function frBundle() {
  return {
    person: fr.person,
    social: fr.social,
    newsletter: fr.newsletter,
    home: fr.home,
    about: fr.about,
    blog: fr.blog,
    work: fr.work,
    uses: fr.uses,
    services: fr.services,
    contact: fr.contact,
    keywords: fr.keywords,
  };
}

export type Content = ReturnType<typeof getContent>;
