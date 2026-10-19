// Tells IndexNow (Bing, and through it Copilot; also Yandex, Seznam…) which
// pages changed in a deploy, so they are recrawled within minutes.
// Google does not use IndexNow: it relies on the sitemap.
//
// Usage: node scripts/indexnow.mjs <before-sha> <after-sha>
// Run by the deploy workflow once the new version is live.
import { execFileSync } from "node:child_process";

const HOST = "www.ewenlq.fr";
// Public by design: the same key is served at https://www.ewenlq.fr/<KEY>.txt
// to prove the site owns it.
const KEY = "8d690ed2edcfeb7d02994872b7cbb8c4";
const ORIGIN = `https://${HOST}`;

const STATIC_PAGES = ["", "/about", "/work", "/blog", "/uses", "/services", "/contact", "/legal", "/privacy"];
const both = (path) => [`${ORIGIN}${path}`, `${ORIGIN}/en${path}`];

const [before, after] = process.argv.slice(2);

function changedFiles() {
  // First push of a branch, or a forced history: no usable base.
  if (!before || /^0+$/.test(before)) return null;
  try {
    return execFileSync("git", ["diff", "--name-only", before, after], { encoding: "utf8" })
      .split("\n")
      .filter(Boolean);
  } catch {
    return null;
  }
}

const files = changedFiles();
const urls = new Set();

if (files === null) {
  STATIC_PAGES.forEach((p) => both(p).forEach((u) => urls.add(u)));
} else {
  for (const file of files) {
    const entry = file.match(/^src\/app\/\[locale\]\/(work\/projects|blog\/posts)\/([^/.]+)(\.en)?\.mdx$/);
    if (entry) {
      const section = entry[1] === "work/projects" ? "/work" : "/blog";
      both(`${section}/${entry[2]}`).forEach((u) => urls.add(u));
      // The listing and the home page show the newest entries.
      both(section).forEach((u) => urls.add(u));
      both("").forEach((u) => urls.add(u));
      continue;
    }
    // Shared text, layout or components: every static page may have changed.
    if (/^(src\/app\/resources\/|messages\/|src\/components\/|src\/app\/\[locale\]\/(layout|page)\.tsx)/.test(file)) {
      STATIC_PAGES.forEach((p) => both(p).forEach((u) => urls.add(u)));
      continue;
    }
    const page = file.match(/^src\/app\/\[locale\]\/([a-z]+)\/page\.tsx$/);
    if (page && STATIC_PAGES.includes(`/${page[1]}`)) both(`/${page[1]}`).forEach((u) => urls.add(u));
  }
}

if (urls.size === 0) {
  console.log("IndexNow: no page changed, nothing to submit.");
  process.exit(0);
}

const urlList = [...urls].sort();
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${ORIGIN}/${KEY}.txt`, urlList }),
});

// 200 and 202 both mean accepted; anything else is reported, never fatal.
console.log(`IndexNow: ${res.status} for ${urlList.length} URL(s)`);
urlList.forEach((u) => console.log(`  ${u}`));
if (res.status >= 400) console.log(await res.text());
