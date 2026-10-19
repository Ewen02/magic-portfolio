"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { formatDate, typeset } from "@/app/utils/formatDate";
import type { PostSummary } from "./data";
import styles from "./BlogIndex.module.scss";

export type BlogLabels = {
  eyebrow: string;
  articles: string;
  all: string;
  filterBy: string;
  latest: string;
  read: string;
  minutes: string;
  fromProject: string;
};

type BlogIndexProps = {
  title: string;
  intro: string;
  posts: PostSummary[];
  labels: BlogLabels;
  locale: "fr" | "en";
};

// Cover of a post: its own image or its project's, else a typographic card.
export function PostCover({ post, sizes, priority }: { post: PostSummary; sizes: string; priority?: boolean }) {
  if (post.image) {
    return <Image src={post.image} alt="" fill sizes={sizes} priority={priority} />;
  }
  return (
    <span className={styles.fallback} aria-hidden="true">
      <span>{post.tag || "Blog"}</span>
    </span>
  );
}

function monthKey(date: string, locale: "fr" | "en") {
  const d = new Date(date.includes("T") ? date : `${date}T00:00:00`);
  return d.toLocaleDateString(locale === "en" ? "en-US" : "fr-FR", { month: "long", year: "numeric" });
}

function dayOf(date: string) {
  const d = new Date(date.includes("T") ? date : `${date}T00:00:00`);
  return String(d.getDate()).padStart(2, "0");
}

export function BlogIndex({ title, intro, posts, labels, locale }: BlogIndexProps) {
  const [tag, setTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const count = new Map<string, number>();
    for (const p of posts) if (p.tag) count.set(p.tag, (count.get(p.tag) ?? 0) + 1);
    return [...count.entries()].sort((a, b) => b[1] - a[1]);
  }, [posts]);

  const shown = tag ? posts.filter((p) => p.tag === tag) : posts;
  const [featured, ...rest] = shown;

  // Journal: the remaining posts grouped by month, newest first.
  const months = useMemo(() => {
    const groups: { label: string; posts: PostSummary[] }[] = [];
    for (const p of rest) {
      const label = monthKey(p.publishedAt, locale);
      const last = groups[groups.length - 1];
      if (last?.label === label) last.posts.push(p);
      else groups.push({ label, posts: [p] });
    }
    return groups;
  }, [rest, locale]);

  const meta = (p: PostSummary) =>
    [p.tag, formatDate(p.publishedAt, locale), `${p.minutes} ${labels.minutes}`].filter(Boolean).join(" · ");

  return (
    <div className={styles.root}>
      <header className={styles.head}>
        <span className={styles.eyebrow}>
          {labels.eyebrow} · {posts.length} {labels.articles}
        </span>
        {/* Non-breaking hyphens keep « real-time » on one line. */}
        <h1 className={styles.title}>{typeset(title).replace(/(\w)-(\w)/g, "$1\u2011$2")}</h1>
        <p className={styles.intro}>{typeset(intro)}</p>
        <div className={styles.filters} role="group" aria-label={labels.filterBy}>
          <button
            type="button"
            className={styles.filter}
            aria-pressed={tag === null}
            onClick={() => setTag(null)}
          >
            {labels.all}
            <span>{posts.length}</span>
          </button>
          {tags.map(([name, n]) => (
            <button
              key={name}
              type="button"
              className={styles.filter}
              aria-pressed={tag === name}
              onClick={() => setTag(tag === name ? null : name)}
            >
              {name}
              <span>{n}</span>
            </button>
          ))}
        </div>
      </header>

      {featured && (
        <Link href={`/blog/${featured.slug}`} className={styles.featured}>
          <span className={styles.featuredCover}>
            <PostCover post={featured} sizes="(max-width: 900px) 100vw, 560px" priority />
          </span>
          <span className={styles.featuredBody}>
            <span className={styles.kicker}>{labels.latest}</span>
            <span className={styles.featuredTitle}>{featured.title}</span>
            <span className={styles.featuredSummary}>{featured.summary}</span>
            <span className={styles.meta}>{meta(featured)}</span>
            <span className={styles.featuredFoot}>
              {featured.project && (
                <span className={styles.project}>
                  {labels.fromProject} <strong>{featured.project.name}</strong>
                </span>
              )}
              <span className={styles.read}>
                {labels.read}
                <span aria-hidden="true">→</span>
              </span>
            </span>
          </span>
        </Link>
      )}

      {months.length > 0 && (
        <div className={styles.journal}>
          {months.map((m) => (
            <section key={m.label} className={styles.month} aria-label={m.label}>
              <h2 className={styles.monthLabel}>{m.label}</h2>
              <ul className={styles.rows}>
                {m.posts.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className={styles.row}>
                      <span className={styles.day}>{dayOf(p.publishedAt)}</span>
                      <span className={styles.rowBody}>
                        <span className={styles.rowTitle}>{p.title}</span>
                        <span className={styles.rowSummary}>{p.summary}</span>
                        <span className={styles.rowMeta}>
                          {p.tag && <span className={styles.tag}>{p.tag}</span>}
                          <span>
                            {p.minutes} {labels.minutes}
                          </span>
                          {p.project && <span>{p.project.name}</span>}
                        </span>
                      </span>
                      <span className={styles.thumb}>
                        <PostCover post={p} sizes="200px" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
