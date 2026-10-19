import { setRequestLocale } from "next-intl/server";
import { Column, Heading } from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { getPostSummaries } from "@/components/blog/data";
import { baseURL } from "@/app/resources";
import { getContent, type Locale } from "@/app/resources/getContent";

type LocaleParam = { params: { locale: Locale } };

const localeUrl = (locale: Locale, path: string) =>
  locale === "fr" ? `https://${baseURL}${path}` : `https://${baseURL}/${locale}${path}`;

export async function generateMetadata({ params: { locale } }: LocaleParam) {
  const { blog } = getContent(locale);
  const title = blog.seoTitle ?? blog.title;
  const description = blog.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: {
      canonical: localeUrl(locale, "/blog"),
      languages: {
        fr: `https://${baseURL}/blog`,
        en: `https://${baseURL}/en/blog`,
        "x-default": `https://${baseURL}/blog`,
      },
      types: {
        "application/rss+xml": `https://${baseURL}/blog/feed.xml`,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "en" ? "en_US" : "fr_FR",
      url: localeUrl(locale, "/blog"),
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

export default async function Blog({ params: { locale } }: LocaleParam) {
  setRequestLocale(locale);
  const { blog, person, newsletter } = getContent(locale);

  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            headline: blog.title,
            description: blog.description,
            url: localeUrl(locale, "/blog"),
            inLanguage: locale === "en" ? "en-US" : "fr-FR",
            image: `https://${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
            author: {
              "@type": "Person",
              name: person.name,
              url: localeUrl(locale, "/about"),
              image: {
                "@type": "ImageObject",
                url: `https://${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <BlogIndex
        title={blog.title}
        intro={blog.intro}
        posts={getPostSummaries(locale)}
        labels={blog.labels}
        locale={locale}
      />
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
