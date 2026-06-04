import { setRequestLocale } from "next-intl/server";
import { getPosts } from "@/app/utils/utils";
import { Column, Heading, Text } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { baseURL } from "@/app/resources";
import { getContent, type Locale } from "@/app/resources/getContent";

type LocaleParam = { params: { locale: Locale } };

const localeUrl = (locale: Locale, path: string) =>
  locale === "fr" ? `https://${baseURL}${path}` : `https://${baseURL}/${locale}${path}`;

export async function generateMetadata({ params: { locale } }: LocaleParam) {
  const { work } = getContent(locale);
  const title = work.title;
  const description = work.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: {
      canonical: localeUrl(locale, "/work"),
      languages: {
        fr: `https://${baseURL}/work`,
        en: `https://${baseURL}/en/work`,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "en" ? "en_US" : "fr_FR",
      url: localeUrl(locale, "/work"),
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

export default async function Work({ params: { locale } }: LocaleParam) {
  setRequestLocale(locale);
  const { person, work } = getContent(locale);
  let allProjects = getPosts(["src", "app", "[locale]", "work", "projects"], locale);

  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: work.title,
            description: work.description,
            url: localeUrl(locale, "/work"),
            inLanguage: locale === "en" ? "en-US" : "fr-FR",
            image: `https://${baseURL}/og?title=${encodeURIComponent(work.title)}`,
            author: {
              "@type": "Person",
              name: person.name,
              url: localeUrl(locale, "/about"),
            },
            hasPart: allProjects.map((project) => ({
              "@type": "CreativeWork",
              headline: project.metadata.title,
              description: project.metadata.summary,
              url: localeUrl(locale, `/work/${project.slug}`),
              image: project.metadata.images?.[0]
                ? `https://${baseURL}${project.metadata.images[0]}`
                : `https://${baseURL}/og?title=${encodeURIComponent(project.metadata.title)}`,
            })),
          }),
        }}
      />
      <Column maxWidth="s" gap="m" marginBottom="xl" paddingX="l">
        <Heading as="h1" variant="display-strong-s">
          {locale === "en"
            ? "Full Stack Development Projects (SaaS, AI, real-time)"
            : "Projets de développement Full Stack (SaaS, IA, temps réel)"}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          {work.description}
        </Text>
      </Column>
      <Projects locale={locale} />
    </Column>
  );
}
