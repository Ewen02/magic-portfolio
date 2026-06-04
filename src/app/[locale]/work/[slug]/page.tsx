import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CustomMDX } from "@/components/mdx";
import { getPosts, type Locale } from "@/app/utils/utils";
import { AvatarGroup, Button, Column, Flex, Heading, SmartImage, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { getContent } from "@/app/resources/getContent";
import { formatDate } from "@/app/utils/formatDate";
import ScrollToHash from "@/components/ScrollToHash";
import { routing } from "@/i18n/routing";

interface WorkParams {
  params: {
    locale: Locale;
    slug: string;
  };
}

const PROJECTS_PATH = ["src", "app", "[locale]", "work", "projects"];

const localeUrl = (locale: Locale, path: string) =>
  locale === "fr" ? `https://${baseURL}${path}` : `https://${baseURL}/${locale}${path}`;

export async function generateStaticParams(): Promise<{ locale: string; slug: string }[]> {
  return routing.locales.flatMap((locale) =>
    getPosts(PROJECTS_PATH, locale).map((post) => ({
      locale,
      slug: post.slug,
    })),
  );
}

export function generateMetadata({ params: { locale, slug } }: WorkParams) {
  let post = getPosts(PROJECTS_PATH, locale).find((post) => post.slug === slug);

  if (!post) {
    return;
  }

  let { title, publishedAt: publishedTime, summary: description, images, team } = post.metadata;
  let ogImage = images?.[0]
    ? `https://${baseURL}${images[0]}`
    : `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    images,
    team,
    alternates: {
      canonical: localeUrl(locale, `/work/${post.slug}`),
      languages: {
        fr: `https://${baseURL}/work/${post.slug}`,
        en: `https://${baseURL}/en/work/${post.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      locale: locale === "en" ? "en_US" : "fr_FR",
      url: localeUrl(locale, `/work/${post.slug}`),
      images: [
        {
          url: ogImage,
          alt: title,
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

export default async function Project({ params: { locale, slug } }: WorkParams) {
  setRequestLocale(locale);
  const t = await getTranslations();
  const { person } = getContent(locale);
  let post = getPosts(PROJECTS_PATH, locale).find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            inLanguage: locale === "en" ? "en-US" : "fr-FR",
            image: post.metadata.images?.[0]
              ? `https://${baseURL}${post.metadata.images[0]}`
              : `https://${baseURL}/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: localeUrl(locale, `/work/${post.slug}`),
            author: {
              "@type": "Person",
              name: person.name,
              url: localeUrl(locale, "/about"),
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
                name: t("breadcrumb.work"),
                item: localeUrl(locale, "/work"),
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.metadata.title,
                item: localeUrl(locale, `/work/${post.slug}`),
              },
            ],
          }),
        }}
      />
      <Column maxWidth="xs" gap="16">
        <Button href="/work" variant="tertiary" weight="default" size="s" prefixIcon="chevronLeft">
          {t("work.backToProjects")}
        </Button>
        <Heading variant="display-strong-s">{post.metadata.title}</Heading>
      </Column>
      {post.metadata.images.length > 0 && (
        <SmartImage
          priority
          aspectRatio="16 / 9"
          radius="m"
          alt={post.metadata.title}
          src={post.metadata.images[0]}
        />
      )}
      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <Flex gap="12" marginBottom="24" vertical="center">
          {post.metadata.team && <AvatarGroup reverse avatars={avatars} size="m" />}
          <Text variant="body-default-s" onBackground="neutral-weak">
            {formatDate(post.metadata.publishedAt)}
          </Text>
        </Flex>
        <CustomMDX source={post.content} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
