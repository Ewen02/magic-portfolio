import mdx from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],

  // Produit un serveur autonome dans .next/standalone, avec les seules
  // dependances reellement importees au lieu de tout node_modules.
  // C'est ce qui rend l'image Docker publiable : sans cette ligne, il
  // faudrait embarquer 400 Mo de dependances a l'execution.
  output: "standalone",
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Content-Type", value: "application/xml; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=0, s-maxage=3600, must-revalidate" },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=0, s-maxage=3600, must-revalidate" },
        ],
      },
    ];
  },
};

export default withNextIntl(withMDX(nextConfig));
