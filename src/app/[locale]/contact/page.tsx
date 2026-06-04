import { setRequestLocale } from "next-intl/server";
import { Button, Column, Flex, Heading, Icon, IconButton, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { getContent, type Locale } from "@/app/resources/getContent";

type LocaleParam = { params: { locale: Locale } };

const localeUrl = (locale: Locale, path: string) =>
  locale === "fr" ? `https://${baseURL}${path}` : `https://${baseURL}/${locale}${path}`;

export async function generateMetadata({ params: { locale } }: LocaleParam) {
  const { contact } = getContent(locale);
  const title = contact.title;
  const description = contact.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: {
      canonical: localeUrl(locale, "/contact"),
      languages: {
        fr: `https://${baseURL}/contact`,
        en: `https://${baseURL}/en/contact`,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "en" ? "en_US" : "fr_FR",
      url: localeUrl(locale, "/contact"),
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

export default async function Contact({ params: { locale } }: LocaleParam) {
  setRequestLocale(locale);
  const { person, contact, social, about } = getContent(locale);

  return (
    <Column maxWidth="m" gap="xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ContactPage",
                name: contact.title,
                description: contact.description,
                url: localeUrl(locale, "/contact"),
                inLanguage: locale === "en" ? "en-US" : "fr-FR",
                mainEntity: {
                  "@type": "Person",
                  name: person.name,
                  jobTitle: person.role,
                  email: `mailto:${person.email}`,
                  url: localeUrl(locale, "/about"),
                  sameAs: social
                    .filter((item) => item.link && item.link.startsWith("http"))
                    .map((item) => item.link),
                },
              },
              ...(about.faq?.display
                ? [
                    {
                      "@type": "FAQPage",
                      mainEntity: about.faq.items.map((item) => ({
                        "@type": "Question",
                        name: item.question,
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: item.answer,
                        },
                      })),
                    },
                  ]
                : []),
            ],
          }),
        }}
      />

      <Column maxWidth="s" gap="m">
        <Heading variant="display-strong-s">{contact.title}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          {contact.intro}
        </Text>
      </Column>

      {contact.calendar.display && (
        <Column
          fillWidth
          gap="16"
          padding="l"
          radius="l"
          border="brand-alpha-medium"
          background="brand-alpha-weak"
          style={{ backdropFilter: "blur(var(--static-space-1))" }}
        >
          <Flex gap="12" vertical="center">
            <Icon name="calendar" onBackground="brand-weak" />
            <Column gap="2">
              <Heading as="h2" variant="heading-strong-l">
                {locale === "en" ? "Book a 30-min call" : "Réserver un appel de 30 min"}
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {locale === "en"
                  ? "The fastest way to discuss your project. Pick a slot that suits you."
                  : "Le plus simple pour échanger sur votre projet. Choisissez un créneau qui vous convient."}
              </Text>
            </Column>
          </Flex>
          <Button
            href={contact.calendar.link}
            label={locale === "en" ? "See availabilities" : "Voir les disponibilités"}
            prefixIcon="calendar"
            variant="primary"
            size="m"
            arrowIcon
          />
        </Column>
      )}

      <Column fillWidth gap="m">
        <Heading as="h2" variant="display-strong-xs">
          {locale === "en" ? "Or email me directly" : "Ou m'écrire directement"}
        </Heading>
        <Flex gap="12" wrap>
          <Button
            href={`mailto:${person.email}`}
            prefixIcon="email"
            label={person.email}
            variant="secondary"
            size="m"
          />
        </Flex>
      </Column>

      {social.length > 0 && (
        <Column fillWidth gap="m">
          <Heading as="h2" variant="display-strong-xs">
            {locale === "en" ? "Social" : "Réseaux"}
          </Heading>
          <Flex gap="12" wrap>
            {social.map(
              (item) =>
                item.link && (
                  <Button
                    key={item.name}
                    href={item.link}
                    prefixIcon={item.icon}
                    label={item.name}
                    variant="secondary"
                    size="m"
                  />
                ),
            )}
            <Button
              href="/cv"
              prefixIcon="clipboard"
              label={locale === "en" ? "View résumé" : "Voir le CV"}
              variant="secondary"
              size="m"
            />
          </Flex>
        </Column>
      )}

      {about.faq?.display && (
        <Column fillWidth gap="m" paddingTop="l">
          <Heading as="h2" id={about.faq.title} variant="display-strong-s">
            {about.faq.title}
          </Heading>
          <Column fillWidth gap="l">
            {about.faq.items.map((item, index) => (
              <Column key={`faq-${index}`} fillWidth gap="8">
                <Text as="h3" variant="heading-strong-m">
                  {item.question}
                </Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {item.answer}
                </Text>
              </Column>
            ))}
          </Column>
        </Column>
      )}
    </Column>
  );
}
