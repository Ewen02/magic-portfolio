import { setRequestLocale } from "next-intl/server";
import { Column, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { getContent, type Locale } from "@/app/resources/getContent";

type LocaleParam = { params: { locale: Locale } };

const localeUrl = (locale: Locale, path: string) =>
  locale === "fr" ? `https://${baseURL}${path}` : `https://${baseURL}/${locale}${path}`;

export async function generateMetadata({ params: { locale } }: LocaleParam) {
  const title = locale === "en" ? "Privacy policy" : "Politique de confidentialité";
  const description =
    locale === "en"
      ? "How personal data is handled on ewenlq.fr."
      : "Gestion des données personnelles sur ewenlq.fr (RGPD).";

  return {
    title,
    description,
    alternates: {
      canonical: localeUrl(locale, "/privacy"),
      languages: {
        fr: `https://${baseURL}/privacy`,
        en: `https://${baseURL}/en/privacy`,
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function Privacy({ params: { locale } }: LocaleParam) {
  setRequestLocale(locale);
  const { person } = getContent(locale);
  const en = locale === "en";

  return (
    <Column maxWidth="s" gap="l">
      <Heading as="h1" variant="display-strong-s">
        {en ? "Privacy policy" : "Politique de confidentialité"}
      </Heading>

      <Text variant="body-default-m" onBackground="neutral-weak">
        {en
          ? "This site respects your privacy. This page explains what data is collected and how it is used, in accordance with the GDPR."
          : "Ce site respecte votre vie privée. Cette page explique quelles données sont collectées et comment elles sont utilisées, conformément au RGPD."}
      </Text>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">
          {en ? "Data collected" : "Données collectées"}
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {en
            ? "This site does not use any tracking cookies and does not collect personal data directly. Anonymous audience measurement is performed via Vercel Analytics and Vercel Speed Insights (no personal identifiers, no cross-site tracking). If you contact me by email or via the contact form, the information you provide is used solely to reply to you."
            : "Ce site n'utilise aucun cookie de suivi publicitaire et ne collecte pas directement de données personnelles. Une mesure d'audience anonyme est réalisée via Vercel Analytics et Vercel Speed Insights (aucun identifiant personnel, pas de suivi inter-sites). Si vous me contactez par email ou via le formulaire de contact, les informations transmises servent uniquement à vous répondre."}
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">
          {en ? "Your rights" : "Vos droits"}
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {en
            ? "Under the GDPR, you have the right to access, rectify and erase your personal data. To exercise these rights, contact me at "
            : "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-moi à l'adresse "}
          {person.email}.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">
          {en ? "Hosting" : "Hébergement"}
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {en
            ? "This site is hosted by Vercel Inc. Server logs may be processed for security and performance purposes."
            : "Ce site est hébergé par Vercel Inc. Des journaux serveur peuvent être traités à des fins de sécurité et de performance."}
        </Text>
      </Column>
    </Column>
  );
}
