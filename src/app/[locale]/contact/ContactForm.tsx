"use client";

import { useState } from "react";
import { Button, Column, Flex, IconButton, Input, Textarea } from "@/once-ui/components";

type Labels = {
  name: string;
  email: string;
  message: string;
  send: string;
  copy: string;
  copied: string;
};

const dict: Record<"fr" | "en", Labels> = {
  fr: {
    name: "Votre nom",
    email: "Votre email",
    message: "Votre message",
    send: "Envoyer le message",
    copy: "Copier l'adresse",
    copied: "Adresse copiée",
  },
  en: {
    name: "Your name",
    email: "Your email",
    message: "Your message",
    send: "Send message",
    copy: "Copy address",
    copied: "Address copied",
  },
};

export function ContactForm({ to, locale }: { to: string; locale: "fr" | "en" }) {
  const t = dict[locale];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  // Builds a mailto: link from the fields and opens the visitor's mail client.
  // No backend, no spam surface — the email is composed locally.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject =
      locale === "en" ? `Contact from ${name || "the portfolio"}` : `Contact de ${name || "le portfolio"}`;
    const bodyLines = [
      message,
      "",
      "—",
      name && (locale === "en" ? `Name: ${name}` : `Nom : ${name}`),
      email && (locale === "en" ? `Email: ${email}` : `Email : ${email}`),
    ].filter(Boolean);
    const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join("\n"),
    )}`;
    window.location.href = href;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(to);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard may be unavailable; the form still works */
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Column fillWidth gap="16">
      <Flex fillWidth gap="12" mobileDirection="column">
        <Input
          id="cf-name"
          label={t.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          id="cf-email"
          type="email"
          label={t.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Flex>
      <Textarea
        id="cf-message"
        label={t.message}
        lines={5}
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Flex gap="12" wrap vertical="center">
        <Button type="submit" prefixIcon="email" label={t.send} variant="primary" size="m" />
        <IconButton
          type="button"
          onClick={handleCopy}
          icon={copied ? "check" : "clipboard"}
          tooltip={copied ? t.copied : t.copy}
          variant="secondary"
          size="m"
        />
      </Flex>
      </Column>
    </form>
  );
}
