"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Flex, ToggleButton } from "@/once-ui/components";

// FR/EN language switch. Keeps the current pathname while swapping the locale,
// using next-intl's locale-aware router/pathname helpers.
export const LocaleSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  const switchTo = (next: (typeof routing.locales)[number]) => {
    if (next === locale) return;
    // `pathname` is the locale-agnostic path; passing `params` preserves any
    // dynamic segments (e.g. [slug]) when re-routing to the new locale.
    router.replace(
      // @ts-expect-error -- params are passed through to satisfy dynamic routes
      { pathname, params },
      { locale: next },
    );
  };

  return (
    <Flex gap="2" vertical="center">
      {routing.locales.map((loc) => (
        <ToggleButton
          key={loc}
          size="s"
          selected={locale === loc}
          onClick={() => switchTo(loc)}
          label={loc.toUpperCase()}
        />
      ))}
    </Flex>
  );
};
