import type { MetadataRoute } from "next";
import { getPosts } from "@/app/utils/utils";
import { baseURL, routes as routesConfig } from "@/app/resources";
import { routing } from "@/i18n/routing";

type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

const origin = `https://${baseURL}`;

// Builds the locale-aware absolute URL for a path (FR has no prefix, EN -> /en).
const url = (locale: string, path: string) =>
  locale === routing.defaultLocale ? `${origin}${path}` : `${origin}/${locale}${path}`;

// hreflang alternates map for a given path, across all locales.
const languagesFor = (path: string) =>
  Object.fromEntries(routing.locales.map((locale) => [locale, url(locale, path)]));

// Per-route SEO hints. Falls back to sensible defaults for anything not listed.
const routeMeta: Record<string, { priority: number; changeFrequency: ChangeFreq }> = {
  "/": { priority: 1.0, changeFrequency: "monthly" },
  "/about": { priority: 0.9, changeFrequency: "monthly" },
  "/work": { priority: 0.9, changeFrequency: "weekly" },
  "/blog": { priority: 0.8, changeFrequency: "weekly" },
  "/uses": { priority: 0.6, changeFrequency: "monthly" },
  "/contact": { priority: 0.8, changeFrequency: "yearly" },
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const today = new Date().toISOString().split("T")[0];

  // One entry per (locale, path), each carrying hreflang alternates.
  const entries: MetadataRoute.Sitemap = [];

  // Static routes.
  const activeRoutes = Object.keys(routesConfig).filter((route) => routesConfig[route]);
  for (const route of activeRoutes) {
    const meta = routeMeta[route] ?? { priority: 0.5, changeFrequency: "monthly" as ChangeFreq };
    const path = route !== "/" ? route : "";
    for (const locale of routing.locales) {
      entries.push({
        url: url(locale, path),
        lastModified: today,
        changeFrequency: meta.changeFrequency,
        priority: meta.priority,
        alternates: { languages: languagesFor(path) },
      });
    }
  }

  // Blog posts.
  if (routesConfig["/blog"]) {
    for (const locale of routing.locales) {
      for (const post of getPosts(
        ["src", "app", "[locale]", "blog", "posts"],
        locale as "fr" | "en",
      )) {
        const path = `/blog/${post.slug}`;
        entries.push({
          url: url(locale, path),
          lastModified: post.metadata.publishedAt,
          changeFrequency: "monthly",
          priority: 0.7,
          alternates: { languages: languagesFor(path) },
        });
      }
    }
  }

  // Work projects.
  if (routesConfig["/work"]) {
    for (const locale of routing.locales) {
      for (const post of getPosts(
        ["src", "app", "[locale]", "work", "projects"],
        locale as "fr" | "en",
      )) {
        const path = `/work/${post.slug}`;
        entries.push({
          url: url(locale, path),
          lastModified: post.metadata.publishedAt,
          changeFrequency: "monthly",
          priority: 0.8,
          alternates: { languages: languagesFor(path) },
        });
      }
    }
  }

  return entries;
}
