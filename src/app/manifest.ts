import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Portfolio de Ewen Le Quéré",
    short_name: "Ewen LQ",
    description: "Ewen Le Quéré, Développeur Full Stack",
    start_url: "/",
    display: "standalone",
    background_color: "#151515",
    theme_color: "#151515",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
