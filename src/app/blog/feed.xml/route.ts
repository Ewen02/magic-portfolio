import { getPosts } from "@/app/utils/utils";
import { baseURL } from "@/app/resources";
import { blog, person } from "@/app/resources/content";

// RSS 2.0 feed for the blog (French default locale).
export async function GET() {
  const origin = `https://${baseURL}`;

  const posts = getPosts(["src", "app", "[locale]", "blog", "posts"], "fr").sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
  );

  const escape = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const items = posts
    .map((post) => {
      const url = `${origin}/blog/${post.slug}`;
      return `    <item>
      <title>${escape(post.metadata.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
      <description>${escape(post.metadata.summary || "")}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(blog.title)} — ${escape(person.name)}</title>
    <link>${origin}/blog</link>
    <description>${escape(blog.description)}</description>
    <language>fr-FR</language>
    <atom:link href="${origin}/blog/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
