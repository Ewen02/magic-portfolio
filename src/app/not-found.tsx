import { redirect } from "next/navigation";

// Global catch-all not-found. Because the root layout no longer renders
// <html>/<body> (that lives in [locale]/layout), an unmatched top-level path
// (e.g. a bad locale prefix) is redirected to the default-locale home, where
// the real localized not-found UI in [locale]/not-found.tsx takes over for
// in-app 404s.
export default function NotFound() {
  redirect("/");
}
