"use client";

import { useState } from "react";
import { Button, Flex, IconButton, Text } from "@/once-ui/components";

type Labels = { share: string; copy: string; copied: string };

const dict: Record<"fr" | "en", Labels> = {
  fr: { share: "Partager :", copy: "Copier le lien", copied: "Lien copié" },
  en: { share: "Share:", copy: "Copy link", copied: "Link copied" },
};

export function ShareButtons({
  url,
  title,
  locale,
}: {
  url: string;
  title: string;
  locale: "fr" | "en";
}) {
  const t = dict[locale];
  const [copied, setCopied] = useState(false);

  const enc = encodeURIComponent;
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`;
  const twitter = `https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard may be unavailable */
    }
  };

  return (
    <Flex gap="12" vertical="center" wrap>
      <Text variant="body-default-s" onBackground="neutral-weak">
        {t.share}
      </Text>
      <Button
        href={linkedin}
        prefixIcon="linkedin"
        label="LinkedIn"
        variant="secondary"
        size="s"
      />
      <Button href={twitter} prefixIcon="x" label="X" variant="secondary" size="s" />
      <IconButton
        onClick={copy}
        icon={copied ? "check" : "openLink"}
        tooltip={copied ? t.copied : t.copy}
        variant="secondary"
        size="s"
      />
    </Flex>
  );
}
