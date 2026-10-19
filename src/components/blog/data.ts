import { getPosts, type Locale } from "@/app/utils/utils";
import { readingTime, typeset } from "@/app/utils/formatDate";

const POSTS_PATH = ["src", "app", "[locale]", "blog", "posts"];
const PROJECTS_PATH = ["src", "app", "[locale]", "work", "projects"];

// Everything a card or a list row needs, serializable for client components.
export type PostSummary = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  tag: string;
  image: string;
  minutes: number;
  project: { slug: string; name: string } | null;
};

// "Krown by Favikon – App iOS…" → "Krown".
function shortProjectName(title: string) {
  return title.split(" – ")[0].replace(/ by .*$/, "").trim();
}

export function getPostSummaries(locale: Locale): PostSummary[] {
  const projects = new Map(
    getPosts(PROJECTS_PATH, locale).map((p) => [
      p.slug,
      { name: shortProjectName(p.metadata.title), image: p.metadata.images?.[0] ?? "" },
    ]),
  );

  return getPosts(POSTS_PATH, locale)
    .map((post) => {
      const project = post.metadata.project ? projects.get(post.metadata.project) : undefined;
      return {
        slug: post.slug,
        title: typeset(post.metadata.title),
        summary: typeset(post.metadata.summary),
        publishedAt: post.metadata.publishedAt,
        tag: typeof post.metadata.tag === "string" ? post.metadata.tag : "",
        // The article's own image first, else its project's cover; "none" asks
        // for the typographic cover.
        image: post.metadata.image === "none" ? "" : post.metadata.image || project?.image || "",
        minutes: readingTime(post.content),
        project: project && post.metadata.project ? { slug: post.metadata.project, name: project.name } : null,
      };
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}
