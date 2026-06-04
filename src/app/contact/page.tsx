import { Button, Column, Flex, Heading, Icon, IconButton, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person, contact, social } from "@/app/resources/content";

export async function generateMetadata() {
  const title = contact.title;
  const description = contact.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://${baseURL}/contact`,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/contact`,
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

export default function Contact() {
  return (
    <Column maxWidth="m" gap="xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: contact.title,
            description: contact.description,
            url: `https://${baseURL}/contact`,
            inLanguage: "fr-FR",
            mainEntity: {
              "@type": "Person",
              name: person.name,
              jobTitle: person.role,
              email: `mailto:${person.email}`,
              url: `https://${baseURL}/about`,
              sameAs: social
                .filter((item) => item.link && item.link.startsWith("http"))
                .map((item) => item.link),
            },
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
        <Flex
          fitWidth
          border="brand-alpha-medium"
          style={{ backdropFilter: "blur(var(--static-space-1))" }}
          background="brand-alpha-weak"
          radius="full"
          padding="4"
          gap="8"
          vertical="center"
        >
          <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
          <Flex paddingX="8">Planifier un appel de 30 min</Flex>
          <IconButton
            href={contact.calendar.link}
            data-border="rounded"
            variant="secondary"
            icon="chevronRight"
          />
        </Flex>
      )}

      <Column fillWidth gap="m">
        <Heading as="h2" variant="display-strong-xs">
          M'écrire directement
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
            Réseaux
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
          </Flex>
        </Column>
      )}
    </Column>
  );
}
