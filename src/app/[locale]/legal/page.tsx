import { setRequestLocale } from "next-intl/server";
import { Column, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { getContent, type Locale } from "@/app/resources/getContent";

type LocaleParam = { params: { locale: Locale } };

const localeUrl = (locale: Locale, path: string) =>
  locale === "fr" ? `https://${baseURL}${path}` : `https://${baseURL}/${locale}${path}`;

export async function generateMetadata({ params: { locale } }: LocaleParam) {
  const title = locale === "en" ? "Legal notice" : "Mentions légales";
  const description =
    locale === "en"
      ? "Legal notice and publisher information for ewenlq.fr."
      : "Mentions légales et informations sur l'éditeur du site ewenlq.fr.";

  return {
    title,
    description,
    alternates: {
      canonical: localeUrl(locale, "/legal"),
      languages: {
        fr: `https://${baseURL}/legal`,
        en: `https://${baseURL}/en/legal`,
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function Legal({ params: { locale } }: LocaleParam) {
  setRequestLocale(locale);
  const { person } = getContent(locale);
  const en = locale === "en";

  return (
    <Column maxWidth="s" gap="l">
      <Heading as="h1" variant="display-strong-s">
        {en ? "Legal notice" : "Mentions légales"}
      </Heading>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">
          {en ? "Publisher" : "Éditeur du site"}
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {person.name} — {en ? "Freelance developer (sole proprietorship / micro-entreprise)" : "Développeur indépendant (micro-entreprise)"}
          <br />
          SIRET : 931 055 966 00010
          <br />
          {en ? "Business activity code (APE): " : "Code APE : "}6201Z —{" "}
          {en ? "Computer programming" : "Programmation informatique"}
          <br />
          {en ? "VAT: not applicable (art. 293 B of the French tax code)" : "TVA : non applicable, art. 293 B du CGI"}
          <br />
          {en ? "Phone: " : "Téléphone : "}06 75 91 33 41
          <br />
          Email : {person.email}
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">
          {en ? "Publication director" : "Directeur de la publication"}
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {person.name}
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">
          {en ? "Hosting" : "Hébergement"}
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Vercel Inc. — 440 N Barranca Ave #4133, Covina, CA 91723, {en ? "United States" : "États-Unis"} — vercel.com
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">
          {en ? "Intellectual property" : "Propriété intellectuelle"}
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {en
            ? "All content on this site (texts, code, visuals) is the property of its author unless otherwise stated. Any reproduction without prior authorization is prohibited."
            : "L'ensemble du contenu de ce site (textes, code, visuels) est la propriété de son auteur, sauf mention contraire. Toute reproduction sans autorisation préalable est interdite."}
        </Text>
      </Column>
    </Column>
  );
}
