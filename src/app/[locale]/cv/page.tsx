import { setRequestLocale } from "next-intl/server";
import { Column, Flex, Heading, Line, SmartLink, Text } from "@/once-ui/components";
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
        profile: "Profile",
        experience: "Experience",
        education: "Education",
        skills: "Skills",
        languages: "Languages",
        hint: "Tip: in the print dialog, choose “Save as PDF”.",
      }
    : {
        title: "CV",
        description: "CV imprimable",
        print: "Imprimer / Enregistrer en PDF",
        profile: "Profil",
        experience: "Expériences",
        education: "Formation",
        skills: "Compétences",
        languages: "Langues",
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
  const { person, about, social } = getContent(locale);
  const l = t(locale);

  const portfolioUrl = localeUrl(locale, "/");
  // Clickable contact items for the header (useful in the exported PDF).
  const links = [
    { label: person.email, href: `mailto:${person.email}` },
    { label: "Portfolio", href: portfolioUrl },
    ...social
      .filter((s) => s.link && s.link.startsWith("http"))
      .map((s) => ({ label: s.name, href: s.link })),
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
        <Column gap="8">
          <Column gap="2">
            <Heading variant="display-strong-m">{person.name}</Heading>
            <Text variant="heading-default-s" onBackground="brand-weak">
              {person.role} · Paris
            </Text>
          </Column>
          <Flex gap="8" wrap vertical="center" textVariant="body-default-s">
            {links.map((item, i) => (
              <Flex key={`lnk-${i}`} gap="8" vertical="center">
                {i > 0 && <Text onBackground="neutral-weak">·</Text>}
                <SmartLink href={item.href}>{item.label}</SmartLink>
              </Flex>
            ))}
          </Flex>
        </Column>

        {/* Profile / accroche */}
        {about.intro.display && (
          <Column className={styles.entry} fillWidth gap="8">
            <Heading as="h2" className={styles.heading} variant="display-strong-xs">
              {l.profile}
            </Heading>
            <Column textVariant="body-default-s" gap="8">
              {about.intro.description}
            </Column>
          </Column>
        )}

        <Line />

        {/* Experience */}
        {about.work.display && (
          <Column fillWidth gap="m">
            <Heading as="h2" className={styles.heading} variant="display-strong-xs">
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
            <Heading as="h2" className={styles.heading} variant="display-strong-xs">
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

        {/* Skills — compact: one dense line per category */}
        {about.technical.display && (
          <Column className={styles.entry} fillWidth gap="8">
            <Heading as="h2" className={styles.heading} variant="display-strong-xs">
              {l.skills}
            </Heading>
            <Column fillWidth gap="4">
              {about.technical.skills.map((skill, i) => (
                <Text key={`skill-${i}`} variant="body-default-s">
                  <strong>{skill.title} :</strong>{" "}
                  <Text as="span" onBackground="neutral-weak">
                    {skill.description}
                  </Text>
                </Text>
              ))}
            </Column>
          </Column>
        )}

        <Line />

        {/* Languages */}
        {person.languages?.length > 0 && (
          <Column className={styles.entry} fillWidth gap="8">
            <Heading as="h2" className={styles.heading} variant="display-strong-xs">
              {l.languages}
            </Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {person.languages.join("  ·  ")}
            </Text>
          </Column>
        )}

        <Text className={styles.noPrint} variant="body-default-xs" onBackground="neutral-weak">
          {l.hint}
        </Text>
      </Column>
    </Column>
  );
}
