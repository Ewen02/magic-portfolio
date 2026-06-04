import React from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes } from "@/app/resources";
import { getContent, type Locale } from "@/app/resources/getContent";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";

type LocaleParam = { params: { locale: Locale } };

export async function generateMetadata({ params: { locale } }: LocaleParam) {
  const { home } = getContent(locale);
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;
  const url = locale === "fr" ? `https://${baseURL}` : `https://${baseURL}/${locale}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: `https://${baseURL}`,
        en: `https://${baseURL}/en`,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "en" ? "en_US" : "fr_FR",
      url,
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

export default async function Home({ params: { locale } }: LocaleParam) {
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const { home, about, person, newsletter } = getContent(locale);
  const baseUrl = locale === "fr" ? `https://${baseURL}` : `https://${baseURL}/${locale}`;

  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: home.title,
            description: home.description,
            url: baseUrl,
            inLanguage: locale === "en" ? "en-US" : "fr-FR",
            image: `https://${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              jobTitle: person.role,
              url: `${baseUrl}/about`,
              image: {
                "@type": "ImageObject",
                url: `https://${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} horizontal="start">
            <Button
              id="about"
              data-border="rounded"
              href="/about"
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="8" vertical="center">
                {about.avatar.display && (
                  <Avatar
                    style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} locale={locale} />
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              {t("latestPosts")}
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" locale={locale} />
          </Flex>
        </Flex>
      )}
      <Projects range={[2]} locale={locale} />
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
