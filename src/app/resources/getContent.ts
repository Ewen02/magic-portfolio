import {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  uses,
  contact,
  keywords,
} from "@/app/resources/content";

export type Locale = "fr" | "en";

// Bundles all structured content objects for a given locale.
//
// Phase 1: EN reuses the exact same FR objects as a placeholder. The signature
// is locale-aware so Phase 2 only has to branch on `locale` (e.g. import from
// `content.en` files) without touching any consumer.
export function getContent(_locale: Locale) {
  return {
    person,
    social,
    newsletter,
    home,
    about,
    blog,
    work,
    uses,
    contact,
    keywords,
  };
}

export type Content = ReturnType<typeof getContent>;
