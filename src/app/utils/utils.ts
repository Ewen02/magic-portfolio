import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
};

import { notFound } from 'next/navigation';

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
    if (!fs.existsSync(filePath)) {
        notFound();
    }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    publishedAt: data.publishedAt,
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || [],
    team: data.team || [],
    link: data.link || "",
  };

  return { metadata, content };
}

export type Locale = "fr" | "en";

const DEFAULT_LOCALE: Locale = "fr";

// Extracts the base slug from an MDX filename, stripping an optional locale
// suffix. e.g. "my-post.en.mdx" -> "my-post", "my-post.mdx" -> "my-post".
function getBaseSlug(file: string): { slug: string; locale: Locale } {
  const name = path.basename(file, ".mdx");
  const parts = name.split(".");
  const last = parts[parts.length - 1];

  if (last === "en" || last === "fr") {
    return { slug: parts.slice(0, -1).join("."), locale: last as Locale };
  }
  return { slug: name, locale: DEFAULT_LOCALE };
}

// Returns one post per slug for the requested locale, falling back to the FR
// (default) file when the localized `slug.<locale>.mdx` does not exist.
function getMDXData(dir: string, locale: Locale = DEFAULT_LOCALE) {
  const mdxFiles = getMDXFiles(dir);

  // Group files by their base slug so each project/article is a single entry
  // regardless of how many language variants exist on disk.
  const bySlug = new Map<string, Partial<Record<Locale, string>>>();
  for (const file of mdxFiles) {
    const { slug, locale: fileLocale } = getBaseSlug(file);
    const entry = bySlug.get(slug) ?? {};
    entry[fileLocale] = file;
    bySlug.set(slug, entry);
  }

  const posts: { metadata: Metadata; slug: string; content: string }[] = [];
  for (const [slug, variants] of bySlug) {
    // Prefer the requested locale, fall back to FR (default).
    const file = variants[locale] ?? variants[DEFAULT_LOCALE];
    if (!file) continue;

    const { metadata, content } = readMDXFile(path.join(dir, file));
    posts.push({ metadata, slug, content });
  }

  return posts;
}

export function getPosts(customPath = ["", "", "", ""], locale: Locale = DEFAULT_LOCALE) {
  const postsDir = path.join(process.cwd(), ...customPath);
  return getMDXData(postsDir, locale);
}
