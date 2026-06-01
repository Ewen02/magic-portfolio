import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Portfolio de Ewen Le Quéré",
    short_name: "Ewen LQ",
    description:
      "Ewen Le Quéré, Développeur Full Stack diplômé d'Epitech. React, Next.js, Node.js, NestJS et IA appliquée (RAG, LLM, agents).",
    start_url: "/",
    scope: "/",
    display: "standalone",
    lang: "fr",
    dir: "ltr",
    background_color: "#151515",
    theme_color: "#151515",
    categories: ["portfolio", "technology", "developer"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
