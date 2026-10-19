import type { Locale } from "@/app/utils/utils";
import { getContent } from "@/app/resources/getContent";
import { getPostSummaries } from "./data";
import Post from "./Post";
import styles from "./Posts.module.scss";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  locale?: Locale;
  // Slug to leave out, e.g. the article being read.
  exclude?: string;
}

export function Posts({ range, columns = "1", locale = "fr", exclude }: PostsProps) {
  const { blog } = getContent(locale);
  const all = getPostSummaries(locale).filter((p) => p.slug !== exclude);
  const shown = range ? all.slice(range[0] - 1, range.length === 2 ? range[1] : all.length) : all;

  if (shown.length === 0) return null;

  return (
    <div className={styles.grid} style={{ ["--columns" as string]: columns }}>
      {shown.map((post) => (
        <Post key={post.slug} post={post} locale={locale} minutesLabel={blog.labels.minutes} />
      ))}
    </div>
  );
}
