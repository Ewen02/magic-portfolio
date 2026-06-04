import { setRequestLocale } from "next-intl/server";
import { Column, Flex, Heading, Tag, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { getContent, type Locale } from "@/app/resources/getContent";

type LocaleParam = { params: { locale: Locale } };

const localeUrl = (locale: Locale, path: string) =>
  locale === "fr" ? `https://${baseURL}${path}` : `https://${baseURL}/${locale}${path}`;

export async function generateMetadata({ params: { locale } }: LocaleParam) {
  const { uses } = getContent(locale);
  const title = uses.title;
  const description = uses.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: {
      canonical: localeUrl(locale, "/uses"),
      languages: {
        fr: `https://${baseURL}/uses`,
        en: `https://${baseURL}/en/uses`,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "en" ? "en_US" : "fr_FR",
      url: localeUrl(locale, "/uses"),
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

export default async function Uses({ params: { locale } }: LocaleParam) {
  setRequestLocale(locale);
  const { person, uses } = getContent(locale);

  return (
    <Column maxWidth="m" gap="xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: uses.title,
            description: uses.description,
            url: localeUrl(locale, "/uses"),
            inLanguage: locale === "en" ? "en-US" : "fr-FR",
            author: {
              "@type": "Person",
              name: person.name,
              url: localeUrl(locale, "/about"),
            },
          }),
        }}
      />
      <Column maxWidth="s" gap="m">
        <Heading variant="display-strong-s">{uses.title}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          {uses.intro}
        </Text>
      </Column>

      <Column fillWidth gap="xl">
        {uses.categories.map((category, index) => (
          <Column key={`uses-${index}`} fillWidth gap="m">
            <Heading as="h2" variant="display-strong-xs">
              {category.title}
            </Heading>
            <Column fillWidth gap="16">
              {category.items.map((item, i) => (
                <Flex key={`item-${i}`} gap="12" vertical="start" mobileDirection="column">
                  <Flex minWidth={12} fitWidth>
                    <Tag size="l" label={item.name} variant="brand" />
                  </Flex>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {item.note}
                  </Text>
                </Flex>
              ))}
            </Column>
          </Column>
        ))}
      </Column>
    </Column>
  );
}
