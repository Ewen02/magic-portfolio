import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { CustomMDX, slugify } from "@/components/mdx";
import { getPosts, type Locale } from "@/app/utils/utils";
import { Column } from "@/once-ui/components";
import { Link } from "@/i18n/navigation";
import { baseURL } from "@/app/resources";
import { getContent } from "@/app/resources/getContent";
import { formatDate } from "@/app/utils/formatDate";
import ScrollToHash from "@/components/ScrollToHash";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { ArticleToc, ReadingProgress } from "@/components/blog/ArticleToc";
import { Posts } from "@/components/blog/Posts";
import { getPostSummaries } from "@/components/blog/data";
import styles from "@/components/blog/Article.module.scss";
import { routing } from "@/i18n/routing";

interface BlogParams {
  params: {
    locale: Locale;
    slug: string;
  };
}

const POSTS_PATH = ["src", "app", "[locale]", "blog", "posts"];

const localeUrl = (locale: Locale, path: string) =>
  locale === "fr" ? `https://${baseURL}${path}` : `https://${baseURL}/${locale}${path}`;

export async function generateStaticParams(): Promise<{ locale: string; slug: string }[]> {
  // One slug per article (language-agnostic), generated for every locale.
  return routing.locales.flatMap((locale) =>
    getPosts(POSTS_PATH, locale).map((post) => ({
      locale,
      slug: post.slug,
    })),
  );
}

export function generateMetadata({ params: { locale, slug } }: BlogParams) {
  let post = getPosts(POSTS_PATH, locale).find((post) => post.slug === slug);

  if (!post) {
    return;
  }

  let { title, publishedAt: publishedTime, summary: description, images } = post.metadata;
  let ogImage = images?.[0]
    ? `https://${baseURL}${images[0]}`
    : `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: {
      canonical: localeUrl(locale, `/blog/${post.slug}`),
      languages: {
        fr: `https://${baseURL}/blog/${post.slug}`,
        en: `https://${baseURL}/en/blog/${post.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      locale: locale === "en" ? "en_US" : "fr_FR",
      url: localeUrl(locale, `/blog/${post.slug}`),
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params: { locale, slug } }: BlogParams) {
  setRequestLocale(locale);
  const t = await getTranslations();
  const { person, blog } = getContent(locale);
  const post = getPosts(POSTS_PATH, locale).find((post) => post.slug === slug);
  const summary = getPostSummaries(locale).find((p) => p.slug === slug);

  if (!post || !summary) {
    notFound();
  }

  const headings = getHeadings(post.content);

  return (
    <Column as="section" maxWidth="l" fillWidth>
      <ReadingProgress />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            inLanguage: locale === "en" ? "en-US" : "fr-FR",
            image: summary.image
              ? `https://${baseURL}${summary.image}`
              : `https://${baseURL}/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: localeUrl(locale, `/blog/${post.slug}`),
            author: {
              "@type": "Person",
              name: person.name,
              url: localeUrl(locale, "/about"),
            },
            publisher: {
              "@type": "Person",
              name: person.name,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: t("breadcrumb.home"),
                item: localeUrl(locale, ""),
              },
              {
                "@type": "ListItem",
                position: 2,
                name: t("breadcrumb.blog"),
                item: localeUrl(locale, "/blog"),
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.metadata.title,
                item: localeUrl(locale, `/blog/${post.slug}`),
              },
            ],
          }),
        }}
      />

      <div className={styles.layout}>
        <header className={styles.header}>
          <Link href="/blog" className={styles.back}>
            <span aria-hidden="true">←</span> {blog.labels.allPosts}
          </Link>
          <p className={styles.meta}>
            {[summary.tag, formatDate(summary.publishedAt, locale), `${summary.minutes} ${blog.labels.minutes}`]
              .filter(Boolean)
              .join(" · ")}
          </p>
          <h1 className={styles.title}>{summary.title}</h1>
          <p className={styles.lede}>{summary.summary}</p>
          <div className={styles.byline}>
            <span className={styles.author}>
              <span className={styles.avatar}>
                <Image src={person.avatar} alt="" fill sizes="40px" />
              </span>
              <span>
                <strong>{person.name}</strong>
                <span>{person.role}</span>
              </span>
            </span>
            {summary.project && (
              <Link href={`/work/${summary.project.slug}`} className={styles.projectLink}>
                {blog.labels.fromProject} <strong>{summary.project.name}</strong>
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </header>

        {summary.image && (
          <figure className={styles.cover}>
            <Image src={summary.image} alt="" fill priority sizes="(max-width: 1100px) 100vw, 1040px" />
          </figure>
        )}

        <article className={styles.body}>
          <CustomMDX source={post.content} />
        </article>

        <aside className={styles.aside} style={{ gridRow: summary.image ? 3 : 2 }}>
          <ArticleToc headings={headings} label={blog.labels.toc} />
        </aside>

        <footer className={styles.footer}>
          <ShareButtons
            url={localeUrl(locale, `/blog/${post.slug}`)}
            title={post.metadata.title}
            locale={locale}
          />
          <div className={styles.authorCard}>
            <span className={styles.avatarLarge}>
              <Image src={person.avatar} alt="" fill sizes="64px" />
            </span>
            <div>
              <p className={styles.authorLabel}>{blog.labels.writtenBy}</p>
              <p className={styles.authorName}>{person.name}</p>
              <p className={styles.authorNote}>{blog.labels.authorNote}</p>
              <div className={styles.authorLinks}>
                <Link href="/about">{t("nav.about")}</Link>
                <Link href="/contact">{blog.labels.contact}</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <section className={styles.related} aria-labelledby="related-title">
        <h2 id="related-title" className={styles.relatedTitle}>
          {blog.labels.related}
        </h2>
        <Posts range={[1, 2]} columns="2" locale={locale} exclude={post.slug} />
      </section>
      <ScrollToHash />
    </Column>
  );
}

// Section headings of the article, with the ids the MDX renderer gives them.
function getHeadings(content: string) {
  const headings: { id: string; text: string }[] = [];
  let inCode = false;
  for (const line of content.split("\n")) {
    if (line.trim().startsWith("```")) inCode = !inCode;
    if (inCode || !line.startsWith("## ")) continue;
    const text = line.slice(3).trim();
    // The contents number the sections itself: drop a leading "1. ".
    headings.push({ id: slugify(text), text: text.replace(/^\d+\.\s+/, "") });
  }
  return headings;
}
