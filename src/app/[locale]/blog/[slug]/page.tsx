import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CustomMDX } from "@/components/mdx";
import { getPosts, type Locale } from "@/app/utils/utils";
import { AvatarGroup, Button, Column, Heading, Row, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { getContent } from "@/app/resources/getContent";
import { formatDate } from "@/app/utils/formatDate";
import ScrollToHash from "@/components/ScrollToHash";
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
  const { person } = getContent(locale);
  let post = getPosts(POSTS_PATH, locale).find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="xs" gap="l">
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
            image: post.metadata.images?.[0]
              ? `https://${baseURL}${post.metadata.images[0]}`
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
      <Button href="/blog" weight="default" variant="tertiary" size="s" prefixIcon="chevronLeft">
        {t("blog.backToPosts")}
      </Button>
      <Heading variant="display-strong-s">{post.metadata.title}</Heading>
      <Row gap="12" vertical="center">
        {avatars.length > 0 && <AvatarGroup size="s" avatars={avatars} />}
        <Text variant="body-default-s" onBackground="neutral-weak">
          {formatDate(post.metadata.publishedAt)}
        </Text>
      </Row>
      <Column as="article" fillWidth>
        <CustomMDX source={post.content} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
