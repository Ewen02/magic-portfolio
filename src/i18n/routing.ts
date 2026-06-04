import { defineRouting } from "next-intl/routing";

export const locales = ["fr", "en"] as const;
export const defaultLocale = "fr" as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale,
  // FR is served without a prefix (ewenlq.fr/about),
  // EN is served under /en (ewenlq.fr/en/about).
  localePrefix: "as-needed",
});
