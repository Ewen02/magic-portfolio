import classNames from "classnames";
import { notFound } from "next/navigation";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import { Footer, Header, RouteGuard } from "@/components";
import { baseURL, effects, style } from "@/app/resources";

import { Inter } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";

import { getContent } from "@/app/resources/getContent";
import { Background, Column, Flex, ToastProvider } from "@/once-ui/components";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type LocaleParam = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: LocaleParam) {
  const { person, home, keywords } = getContent(locale as "fr" | "en");
  const ogLocale = locale === "en" ? "en_US" : "fr_FR";
  const canonical = locale === "fr" ? `https://${baseURL}` : `https://${baseURL}/${locale}`;

  return {
    metadataBase: new URL(`https://${baseURL}`),
    title: {
      default: home.title,
      template: `%s | ${person.name}`,
    },
    description: home.description,
    keywords,
    authors: [{ name: person.name, url: `https://${baseURL}/about` }],
    creator: person.name,
    publisher: person.name,
    applicationName: `Portfolio de ${person.name}`,
    alternates: {
      canonical,
      languages: {
        fr: `https://${baseURL}`,
        en: `https://${baseURL}/en`,
      },
    },
    verification: {
      google: "MIp6DeTsl4i1kKPH7GRp8816dJtrR_g6VGs7KFsOpbc",
    },
    openGraph: {
      title: `Portfolio de ${person.name}`,
      description: `Portfolio de ${person.name}, ${person.role}.`,
      url: canonical,
      siteName: `Portfolio de ${person.name}`,
      locale: ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Portfolio de ${person.name}`,
      description: `Portfolio de ${person.name}, ${person.role}.`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

const primary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

type FontConfig = {
  variable: string;
};

/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;
/*
 */

const code = Source_Code_Pro({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Enable static rendering for this locale.
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <Flex
      as="html"
      lang={locale}
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-theme={style.theme}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      className={classNames(
        primary.variable,
        secondary ? secondary.variable : "",
        tertiary ? tertiary.variable : "",
        code.variable,
      )}
    >
      <NextIntlClientProvider messages={messages}>
        <ToastProvider>
          <Column style={{ minHeight: "100vh" }} as="body" fillWidth margin="0" padding="0">
            <Background
              mask={{
                cursor: effects.mask.cursor,
                x: effects.mask.x,
                y: effects.mask.y,
                radius: effects.mask.radius,
              }}
              gradient={{
                display: effects.gradient.display,
                x: effects.gradient.x,
                y: effects.gradient.y,
                width: effects.gradient.width,
                height: effects.gradient.height,
                tilt: effects.gradient.tilt,
                colorStart: effects.gradient.colorStart,
                colorEnd: effects.gradient.colorEnd,
                opacity: effects.gradient.opacity as
                  | 0
                  | 10
                  | 20
                  | 30
                  | 40
                  | 50
                  | 60
                  | 70
                  | 80
                  | 90
                  | 100,
              }}
              dots={{
                display: effects.dots.display,
                color: effects.dots.color,
                size: effects.dots.size as any,
                opacity: effects.dots.opacity as any,
              }}
              grid={{
                display: effects.grid.display,
                color: effects.grid.color,
                width: effects.grid.width as any,
                height: effects.grid.height as any,
                opacity: effects.grid.opacity as any,
              }}
              lines={{
                display: effects.lines.display,
                opacity: effects.lines.opacity as any,
              }}
            />
            <Flex fillWidth minHeight="16"></Flex>
            <Header />
            <Flex
              position="relative"
              zIndex={0}
              fillWidth
              paddingY="l"
              paddingX="l"
              horizontal="center"
              flex={1}
            >
              <Flex horizontal="center" fillWidth minHeight="0">
                <RouteGuard>{children}</RouteGuard>
              </Flex>
            </Flex>
            <Footer />
          </Column>
        </ToastProvider>
      </NextIntlClientProvider>
      <Analytics />
      <SpeedInsights />
    </Flex>
  );
}
