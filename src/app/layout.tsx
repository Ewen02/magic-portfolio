import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

// Root layout is intentionally minimal: Next.js requires a root layout, but the
// real document chrome (<html>/<body>, fonts, providers, Header/Footer) lives in
// `src/app/[locale]/layout.tsx` so that `lang` can be driven by the active
// locale. next-intl's App Router pattern supports a root layout that only
// forwards its children — the [locale] segment provides the <html>/<body>.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
