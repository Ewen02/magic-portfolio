import { setRequestLocale } from "next-intl/server";
import { Button, Column, Flex, Heading, Icon, Tag, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { getContent, type Locale } from "@/app/resources/getContent";

type LocaleParam = { params: { locale: Locale } };

const localeUrl = (locale: Locale, path: string) =>
  locale === "fr" ? `https://${baseURL}${path}` : `https://${baseURL}/${locale}${path}`;

export async function generateMetadata({ params: { locale } }: LocaleParam) {
  const { services } = getContent(locale);
  const title = services.title;
  const description = services.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: {
      canonical: localeUrl(locale, "/services"),
      languages: {
        fr: `https://${baseURL}/services`,
        en: `https://${baseURL}/en/services`,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "en" ? "en_US" : "fr_FR",
      url: localeUrl(locale, "/services"),
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Services({ params: { locale } }: LocaleParam) {
  setRequestLocale(locale);
  const { person, services, contact } = getContent(locale);

  return (
    <Column maxWidth="m" gap="xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: `${person.name} — ${services.title}`,
            description: services.description,
            url: localeUrl(locale, "/services"),
            inLanguage: locale === "en" ? "en-US" : "fr-FR",
            areaServed: { "@type": "Place", name: "Paris, France" },
            provider: {
              "@type": "Person",
              name: person.name,
              jobTitle: person.role,
              url: localeUrl(locale, "/about"),
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: services.title,
              itemListElement: services.items.map((item) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: item.title,
                  description: item.description,
                },
              })),
            },
          }),
        }}
      />

      <Column maxWidth="s" gap="m">
        <Heading as="h1" variant="display-strong-s">
          {services.title}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          {services.intro}
        </Text>
      </Column>

      {services.availability && (
        <Flex
          fillWidth
          gap="12"
          padding="m"
          radius="l"
          border="brand-alpha-medium"
          background="brand-alpha-weak"
          vertical="center"
        >
          <Icon name="check" onBackground="brand-weak" />
          <Text variant="body-default-m" onBackground="neutral-strong">
            {services.availability}
          </Text>
        </Flex>
      )}

      <Column fillWidth gap="l">
        {services.items.map((item, index) => (
          <Column
            key={`service-${index}`}
            fillWidth
            gap="12"
            padding="l"
            radius="l"
            border="neutral-medium"
            background="surface"
          >
            <Flex fillWidth horizontal="space-between" vertical="start" wrap gap="12">
              <Heading as="h2" variant="heading-strong-l">
                {item.title}
              </Heading>
              <Tag size="l" variant="brand" label={item.price} />
            </Flex>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {item.description}
            </Text>
            {item.tags?.length > 0 && (
              <Flex gap="8" wrap>
                {item.tags.map((tag, i) => (
                  <Tag key={`svc-${index}-tag-${i}`} size="s" label={tag} />
                ))}
              </Flex>
            )}
          </Column>
        ))}
      </Column>

      {/* Process */}
      {services.process && (
        <Column fillWidth gap="l">
          <Heading as="h2" variant="display-strong-xs">
            {services.process.title}
          </Heading>
          <Column fillWidth gap="m">
            {services.process.steps.map((step, index) => (
              <Flex key={`step-${index}`} gap="16" vertical="start">
                <Flex
                  minWidth="32"
                  height="32"
                  radius="full"
                  background="brand-alpha-weak"
                  border="brand-alpha-medium"
                  horizontal="center"
                  vertical="center"
                >
                  <Text variant="body-strong-m" onBackground="brand-weak">
                    {index + 1}
                  </Text>
                </Flex>
                <Column gap="2">
                  <Text variant="heading-strong-s">{step.title}</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {step.description}
                  </Text>
                </Column>
              </Flex>
            ))}
          </Column>
        </Column>
      )}

      {/* CTA */}
      <Column
        fillWidth
        gap="16"
        padding="l"
        radius="l"
        border="brand-alpha-medium"
        background="brand-alpha-weak"
        style={{ backdropFilter: "blur(var(--static-space-1))" }}
        horizontal="center"
      >
        <Column gap="4" horizontal="center">
          <Heading as="h2" variant="heading-strong-l">
            {services.cta.title}
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak" align="center" wrap="balance">
            {services.cta.description}
          </Text>
        </Column>
        <Flex gap="12" wrap horizontal="center">
          <Button
            href={contact.calendar.link}
            prefixIcon="calendar"
            label={locale === "en" ? "Book a call" : "Réserver un appel"}
            variant="primary"
            size="m"
            arrowIcon
          />
          <Button
            href="/contact"
            prefixIcon="email"
            label={locale === "en" ? "Contact me" : "Me contacter"}
            variant="secondary"
            size="m"
          />
        </Flex>
      </Column>
    </Column>
  );
}
