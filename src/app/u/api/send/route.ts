// Forwards Umami events to Umami Cloud from our own domain, so ad blockers that
// block gateway.umami.is do not drop them (the tracker is served at /u/s.js,
// see next.config.mjs). As in Umami's own proxy guide, the visitor's IP goes on
// in X-Forwarded-For: without it, every visit would seem to come from this
// server, with the wrong location and visitors merged together.
export const dynamic = "force-dynamic";

const GATEWAY = "https://gateway.umami.is/api/send";

export async function POST(req: Request) {
  // Caddy, in front of the app, puts the client first in X-Forwarded-For.
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() || req.headers.get("x-real-ip") || "";

  const headers = new Headers({ "Content-Type": "application/json" });
  for (const [name, value] of req.headers) {
    if (name.startsWith("x-umami-")) headers.set(name, value);
  }
  const userAgent = req.headers.get("user-agent");
  if (userAgent) headers.set("User-Agent", userAgent);
  if (ip) headers.set("X-Forwarded-For", ip);

  try {
    const res = await fetch(GATEWAY, { method: "POST", headers, body: await req.text(), cache: "no-store" });
    return new Response(await res.text(), {
      status: res.status,
      headers: { "Content-Type": res.headers.get("content-type") ?? "application/json" },
    });
  } catch {
    // Analytics must never break a page: report the failure quietly.
    return new Response(null, { status: 502 });
  }
}
