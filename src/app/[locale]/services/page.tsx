import { setRequestLocale } from "next-intl/server";
import { Column } from "@/once-ui/components";
import { ServicesView } from "@/components/services/ServicesView";
import { getPosts } from "@/app/utils/utils";
import { baseURL } from "@/app/resources";
import { getContent, type Locale } from "@/app/resources/getContent";

type LocaleParam = { params: { locale: Locale } };

const localeUrl = (locale: Locale, path: string) =>
  locale === "fr" ? `https://${baseURL}${path}` : `https://${baseURL}/${locale}${path}`;

export async function generateMetadata({ params: { locale } }: LocaleParam) {
  const { services } = getContent(locale);
  const title = services.seoTitle ?? services.title;
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
        "x-default": `https://${baseURL}/services`,
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
  const { person, services, contact, about, uses } = getContent(locale);

  // Projects that prove the offers: short name and cover of each /work page.
  const projects = Object.fromEntries(
    getPosts(["src", "app", "[locale]", "work", "projects"], locale).map((p) => [
      p.slug,
      { name: p.metadata.title.split(" – ")[0].replace(/ by .*$/, ""), image: p.metadata.images?.[0] ?? "" },
    ]),
  );
  const toolNames: Record<string, string> = {};
  for (const c of uses.categories) for (const it of c.items) toolNames[it.icon] ??= it.name;

  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: `${person.name} | ${services.title}`,
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

      <ServicesView
        title={services.title}
        eyebrow={services.eyebrow}
        intro={services.intro}
        status={services.status}
        availability={services.availability}
        labels={services.labels}
        items={services.items}
        process={services.process}
        cta={services.cta}
        testimonials={about.testimonials?.display ? about.testimonials.items : []}
        projects={projects}
        toolNames={toolNames}
        calendarLink={contact.calendar.link}
        avatar={person.avatar}
        name={person.name}
      />
    </Column>
  );
}
