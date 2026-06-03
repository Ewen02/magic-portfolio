import { Column, Flex, Heading, Tag, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person, uses } from "@/app/resources/content";

export async function generateMetadata() {
  const title = uses.title;
  const description = uses.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://${baseURL}/uses`,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/uses`,
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

export default function Uses() {
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
            url: `https://${baseURL}/uses`,
            inLanguage: "fr-FR",
            author: {
              "@type": "Person",
              name: person.name,
              url: `https://${baseURL}/about`,
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
