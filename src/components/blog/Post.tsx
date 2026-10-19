"use client";

import { Link } from "@/i18n/navigation";
import { formatDate } from "@/app/utils/formatDate";
import { PostCover } from "./BlogIndex";
import type { PostSummary } from "./data";
import styles from "./Posts.module.scss";

interface PostProps {
  post: PostSummary;
  locale: "fr" | "en";
  minutesLabel: string;
}

// Article card: cover, then tag, date and reading time, title and summary.
export default function Post({ post, locale, minutesLabel }: PostProps) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <span className={styles.cover}>
        <PostCover post={post} sizes="(max-width: 768px) 100vw, 400px" />
      </span>
      <span className={styles.meta}>
        {[post.tag, formatDate(post.publishedAt, locale, "short"), `${post.minutes} ${minutesLabel}`]
          .filter(Boolean)
          .join(" · ")}
      </span>
      <span className={styles.title}>{post.title}</span>
      <span className={styles.summary}>{post.summary}</span>
    </Link>
  );
}
