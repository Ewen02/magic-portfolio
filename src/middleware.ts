import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - /api, /_next, /_vercel
  // - the metadata routes handled outside [locale]: /og, /robots.txt,
  //   /sitemap.xml, /manifest.webmanifest
  // - any path containing a dot (files: images, fonts, favicon.ico, etc.)
  matcher: [
    "/((?!api|_next|_vercel|og|robots\\.txt|sitemap\\.xml|manifest\\.webmanifest|.*\\..*).*)",
  ],
};
