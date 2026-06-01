import { getPosts } from "@/app/utils/utils";
import { baseURL, routes as routesConfig } from "@/app/resources";

type ChangeFreq =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

// Per-route SEO hints. Falls back to sensible defaults for anything not listed.
const routeMeta: Record<string, { priority: number; changeFrequency: ChangeFreq }> = {
  "/": { priority: 1.0, changeFrequency: "monthly" },
  "/about": { priority: 0.9, changeFrequency: "monthly" },
  "/work": { priority: 0.9, changeFrequency: "weekly" },
  "/blog": { priority: 0.8, changeFrequency: "weekly" },
};

export default async function sitemap() {
  const origin = `https://${baseURL}`;
  const today = new Date().toISOString().split("T")[0];

  const blogs = routesConfig["/blog"]
    ? getPosts(["src", "app", "blog", "posts"]).map((post) => ({
        url: `${origin}/blog/${post.slug}`,
        lastModified: post.metadata.publishedAt,
        changeFrequency: "monthly" as ChangeFreq,
        priority: 0.7,
      }))
    : [];

  const works = routesConfig["/work"]
    ? getPosts(["src", "app", "work", "projects"]).map((post) => ({
        url: `${origin}/work/${post.slug}`,
        lastModified: post.metadata.publishedAt,
        changeFrequency: "monthly" as ChangeFreq,
        priority: 0.8,
      }))
    : [];

  const activeRoutes = Object.keys(routesConfig).filter((route) => routesConfig[route]);

  const routes = activeRoutes.map((route) => {
    const meta = routeMeta[route] ?? { priority: 0.5, changeFrequency: "monthly" as ChangeFreq };
    return {
      url: `${origin}${route !== "/" ? route : ""}`,
      lastModified: today,
      changeFrequency: meta.changeFrequency,
      priority: meta.priority,
    };
  });

  return [...routes, ...blogs, ...works];
}
