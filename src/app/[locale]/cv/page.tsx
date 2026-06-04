import { setRequestLocale } from "next-intl/server";
import { Column, Flex, Heading, Line, Tag, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { getContent, type Locale } from "@/app/resources/getContent";
import { PrintButton } from "./PrintButton";
import styles from "./cv.module.scss";

type LocaleParam = { params: { locale: Locale } };

const localeUrl = (locale: Locale, path: string) =>
  locale === "fr" ? `https://${baseURL}${path}` : `https://${baseURL}/${locale}${path}`;

const t = (locale: Locale) =>
  locale === "en"
    ? {
        title: "Résumé",
        description: "Printable résumé",
        print: "Print / Save as PDF",
        experience: "Experience",
        education: "Education",
        skills: "Skills",
        hint: "Tip: in the print dialog, choose “Save as PDF”.",
      }
    : {
        title: "CV",
        description: "CV imprimable",
        print: "Imprimer / Enregistrer en PDF",
        experience: "Expériences",
        education: "Formation",
        skills: "Compétences",
        hint: "Astuce : dans la fenêtre d’impression, choisissez « Enregistrer en PDF ».",
      };

export async function generateMetadata({ params: { locale } }: LocaleParam) {
  const { person } = getContent(locale);
  const l = t(locale);
  const title = `${l.title} — ${person.name}`;
  const description = `${person.name}, ${person.role}. ${l.description}.`;

  return {
    title,
    description,
    alternates: {
      canonical: localeUrl(locale, "/cv"),
      languages: {
        fr: `https://${baseURL}/cv`,
        en: `https://${baseURL}/en/cv`,
      },
    },
    openGraph: {
      title,
      description,
      type: "profile",
      locale: locale === "en" ? "en_US" : "fr_FR",
      url: localeUrl(locale, "/cv"),
    },
    // A résumé page is not useful in search results; keep it out of the index.
    robots: { index: false, follow: true },
  };
}

export default async function CV({ params: { locale } }: LocaleParam) {
  setRequestLocale(locale);
  const { person, about, social, contact } = getContent(locale);
  const l = t(locale);

  const contactLine = [
    person.role,
    locale === "en" ? "Paris" : "Paris",
    person.email,
    ...social.filter((s) => s.link && s.link.startsWith("http")).map((s) => s.name),
  ];

  return (
    <Column maxWidth="m" gap="l" horizontal="center">
      {/* Print-only globals: hide the app chrome and force a clean white page.
          Injected as a raw <style> because CSS Modules forbids global-only
          selectors (header/footer/body) in a .module.scss file. */}
      <style
        dangerouslySetInnerHTML={{
          __html: `@media print {
            header, footer { display: none !important; }
            html, body { background: #fff !important; }
            @page { margin: 14mm; }
          }`,
        }}
      />
      <Flex className={styles.noPrint} fillWidth horizontal="end" gap="12" wrap>
        <PrintButton label={l.print} />
      </Flex>

      <Column className={styles.cv} fillWidth gap="l">
        {/* Header */}
        <Column gap="4">
          <Heading variant="display-strong-m">{person.name}</Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            {contactLine.join("  ·  ")}
          </Text>
        </Column>

        <Line />

        {/* Experience */}
        {about.work.display && (
          <Column fillWidth gap="m">
            <Heading as="h2" variant="display-strong-xs">
              {l.experience}
            </Heading>
            <Column fillWidth gap="l">
              {about.work.experiences.map((exp, i) => (
                <Column key={`exp-${i}`} className={styles.entry} fillWidth gap="8">
                  <Flex fillWidth horizontal="space-between" vertical="end" wrap gap="8">
                    <Text variant="heading-strong-m">{exp.company}</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {exp.timeframe}
                    </Text>
                  </Flex>
                  <Text variant="body-default-s" onBackground="brand-weak">
                    {exp.role}
                  </Text>
                  <Column as="ul" gap="4" paddingLeft="16">
                    {exp.achievements.map((a: JSX.Element, j: number) => (
                      <Text as="li" variant="body-default-s" key={`exp-${i}-${j}`}>
                        {a}
                      </Text>
                    ))}
                  </Column>
                </Column>
              ))}
            </Column>
          </Column>
        )}

        <Line />

        {/* Education */}
        {about.studies.display && (
          <Column fillWidth gap="m">
            <Heading as="h2" variant="display-strong-xs">
              {l.education}
            </Heading>
            <Column fillWidth gap="m">
              {about.studies.institutions.map((inst, i) => (
                <Column key={`edu-${i}`} className={styles.entry} fillWidth gap="2">
                  <Text variant="heading-strong-s">{inst.name}</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {inst.description}
                  </Text>
                </Column>
              ))}
            </Column>
          </Column>
        )}

        <Line />

        {/* Skills */}
        {about.technical.display && (
          <Column fillWidth gap="m">
            <Heading as="h2" variant="display-strong-xs">
              {l.skills}
            </Heading>
            <Column fillWidth gap="m">
              {about.technical.skills.map((skill, i) => (
                <Column key={`skill-${i}`} className={styles.entry} fillWidth gap="2">
                  <Text variant="heading-strong-s">{skill.title}</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {skill.description}
                  </Text>
                </Column>
              ))}
            </Column>
          </Column>
        )}

        <Text className={styles.noPrint} variant="body-default-xs" onBackground="neutral-weak">
          {l.hint}
        </Text>
      </Column>
    </Column>
  );
}
