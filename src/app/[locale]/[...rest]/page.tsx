import { notFound } from "next/navigation";

// Any path that matches no page lands here and renders [locale]/not-found.tsx
// with a 404 status, instead of falling through to the root not-found, which
// redirects to the home page.
export default function CatchAll() {
  notFound();
}
