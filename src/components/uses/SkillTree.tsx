"use client";

import { useCallback, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { IconType } from "react-icons";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  SiAnthropic,
  SiApple,
  SiAppstore,
  SiBiome,
  SiCaddy,
  SiDart,
  SiDocker,
  SiDotnet,
  SiDrizzle,
  SiElasticsearch,
  SiExpress,
  SiFigma,
  SiFlutter,
  SiGit,
  SiGithubactions,
  SiGooglesearchconsole,
  SiJest,
  SiLangchain,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPhp,
  SiPostgresql,
  SiPosthog,
  SiPrisma,
  SiPython,
  SiRailway,
  SiReact,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiSocketdotio,
  SiStripe,
  SiSwift,
  SiTailwindcss,
  SiThreedotjs,
  SiTurborepo,
  SiTypescript,
  SiVitest,
} from "react-icons/si";
import { LuAccessibility, LuBookOpen, LuCamera, LuDrama, LuListOrdered, LuPlug, LuSparkles } from "react-icons/lu";
import { TbBroadcast, TbVectorTriangle } from "react-icons/tb";
import styles from "./SkillTree.module.scss";

// Brand logos where Simple Icons has one, a plain glyph otherwise.
const ICONS: Record<string, IconType> = {
  a11y: LuAccessibility,
  anthropic: SiAnthropic,
  apple: SiApple,
  appstore: SiAppstore,
  biome: SiBiome,
  caddy: SiCaddy,
  dart: SiDart,
  docker: SiDocker,
  dotnet: SiDotnet,
  drizzle: SiDrizzle,
  elasticsearch: SiElasticsearch,
  evals: LuSparkles,
  express: SiExpress,
  figma: SiFigma,
  flutter: SiFlutter,
  git: SiGit,
  githubactions: SiGithubactions,
  googlesearchconsole: SiGooglesearchconsole,
  jest: SiJest,
  langchain: SiLangchain,
  mcp: LuPlug,
  mongodb: SiMongodb,
  nestjs: SiNestjs,
  nextdotjs: SiNextdotjs,
  nodedotjs: SiNodedotjs,
  openai: SiOpenai,
  php: SiPhp,
  playwright: LuDrama,
  postgresql: SiPostgresql,
  posthog: SiPosthog,
  prisma: SiPrisma,
  python: SiPython,
  queue: LuListOrdered,
  rag: LuBookOpen,
  railway: SiRailway,
  react: SiReact,
  reactquery: SiReactquery,
  redis: SiRedis,
  redux: SiRedux,
  snapshot: LuCamera,
  socketdotio: SiSocketdotio,
  sse: TbBroadcast,
  stripe: SiStripe,
  swift: SiSwift,
  tailwindcss: SiTailwindcss,
  threedotjs: SiThreedotjs,
  turborepo: SiTurborepo,
  typescript: SiTypescript,
  vector: TbVectorTriangle,
  vitest: SiVitest,
};

export type UsesItem = { name: string; icon: string; note: string; projects: string[] };
export type UsesCategory = { id: string; title: string; blurb: string; items: UsesItem[] };
export type UsesProject = { slug: string; name: string; tagline: string; image: string };
export type UsesLabels = {
  hint: string;
  usedIn: string;
  notUsed: string;
  tools: string;
  proofTitle: string;
  proofIntro: string;
  detailsTitle: string;
};

type Side = "left" | "right" | "top" | "bottom";

// Where each branch lands around the profile: client side on the left,
// server side on the right, AI on top, quality at the bottom.
const SLOTS: Record<string, { col: number; row: number; side: Side }> = {
  frontend: { col: 1, row: 1, side: "left" },
  ai: { col: 2, row: 1, side: "top" },
  backend: { col: 3, row: 1, side: "right" },
  mobile: { col: 1, row: 2, side: "left" },
  data: { col: 3, row: 2, side: "right" },
  languages: { col: 1, row: 3, side: "left" },
  quality: { col: 2, row: 3, side: "bottom" },
  devops: { col: 3, row: 3, side: "right" },
};

// Vertical offset of the branch anchor on side cards, to land on the title.
const TITLE_Y = 30;

// Horizontal distance from a card's inner edge where top and bottom routes land.
const INSET = 56;

// Routes stop just short of the card so their end dot is not under its glass.
const GAP = 7;

type Point = [number, number];

// SVG path through orthogonal points, with each corner rounded.
function roundedPath(points: Point[], radius = 14): string {
  const pts = points.filter(
    (pt, i) => i === 0 || Math.hypot(pt[0] - points[i - 1][0], pt[1] - points[i - 1][1]) > 0.5,
  );
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const [px, py] = pts[i - 1];
    const [x, y] = pts[i];
    const [nx, ny] = pts[i + 1];
    const inLen = Math.hypot(x - px, y - py);
    const outLen = Math.hypot(nx - x, ny - y);
    const rr = Math.min(radius, inLen / 2, outLen / 2);
    const ax = x - ((x - px) / inLen) * rr;
    const ay = y - ((y - py) / inLen) * rr;
    const bx = x + ((nx - x) / outLen) * rr;
    const by = y + ((ny - y) / outLen) * rr;
    d += ` L ${ax} ${ay} Q ${x} ${y} ${bx} ${by}`;
  }
  const last = pts[pts.length - 1];
  return `${d} L ${last[0]} ${last[1]}`;
}

// Reading order, used on mobile where the branches become a vertical tree.
const ORDER = ["ai", "frontend", "backend", "mobile", "data", "languages", "quality", "devops"];

type Branch = { id: string; d: string; x: number; y: number };
type Focus = { kind: "project"; slug: string } | { kind: "item"; key: string } | null;

type SkillTreeProps = {
  name: string;
  role: string;
  avatar: string;
  categories: UsesCategory[];
  projects: UsesProject[];
  labels: UsesLabels;
};

export function SkillTree({ name, role, avatar, categories, projects, labels }: SkillTreeProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const plateRef = useRef<HTMLDivElement>(null);
  const maskId = `uses-mask-${useId().replace(/:/g, "")}`;
  const [hole, setHole] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const cardRefs = useRef<Record<string, HTMLElement | null>>({});
  const [branches, setBranches] = useState<Branch[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [focus, setFocus] = useState<Focus>(null);

  const items = useMemo(() => {
    const byKey = new Map<string, UsesItem>();
    for (const c of categories) for (const it of c.items) byKey.set(`${c.id}:${it.name}`, it);
    return byKey;
  }, [categories]);

  const toolCount = useMemo(() => {
    const count: Record<string, number> = {};
    for (const c of categories)
      for (const it of c.items) for (const p of it.projects) count[p] = (count[p] ?? 0) + 1;
    return count;
  }, [categories]);

  const ordered = useMemo(
    () => [...categories].sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id)),
    [categories],
  );

  const projectName = useMemo(() => Object.fromEntries(projects.map((p) => [p.slug, p.name])), [projects]);

  // Branch geometry is measured from the laid-out cards, so it follows any
  // viewport width. Routes are orthogonal with rounded corners and run in the
  // gaps between cards; the ones heading down pass behind the name plate.
  // Below the desktop breakpoint the CSS trunk takes over.
  const measure = useCallback(() => {
    const map = mapRef.current;
    const photo = photoRef.current;
    if (!map || !photo || !window.matchMedia("(min-width: 1024px)").matches) {
      setBranches([]);
      return;
    }
    // Offsets, not bounding rects: the cards are still sliding in when this
    // first runs, and transforms must not shift the routes.
    const rel = (el: HTMLElement) => {
      let x = 0;
      let y = 0;
      let node: HTMLElement | null = el;
      while (node && node !== map) {
        x += node.offsetLeft;
        y += node.offsetTop;
        node = node.offsetParent as HTMLElement | null;
      }
      return { left: x, top: y, right: x + el.offsetWidth, bottom: y + el.offsetHeight };
    };
    const p = rel(photo);
    const cx = (p.left + p.right) / 2;
    const cy = (p.top + p.bottom) / 2;
    const r = (p.right - p.left) / 2 + 10;
    const k = r * Math.SQRT1_2;

    const box = (id: string) => {
      const el = cardRefs.current[id];
      return el ? rel(el) : null;
    };
    const inColumn = (col: number, row: number) =>
      Object.entries(SLOTS).find(([, s]) => s.col === col && s.row === row)?.[0];

    const next: Branch[] = [];
    for (const c of categories) {
      const slot = SLOTS[c.id];
      const b = box(c.id);
      if (!slot || !b) continue;
      const toLeft = slot.col === 1;
      const inner = toLeft ? b.right - INSET : b.left + INSET;
      const centerX = (b.left + b.right) / 2;
      let pts: Point[] = [];

      if (slot.side === "top") {
        pts = [[cx, cy - r], [cx, (cy - r + b.bottom) / 2], [centerX, (cy - r + b.bottom) / 2], [centerX, b.bottom + GAP]];
      } else if (slot.side === "bottom") {
        pts = [[cx, cy + r], [cx, (cy + r + b.top) / 2], [centerX, (cy + r + b.top) / 2], [centerX, b.top - GAP]];
      } else if (slot.row === 2) {
        const edge = toLeft ? b.right + GAP : b.left - GAP;
        const ay = Math.min(Math.max(cy, b.top + TITLE_Y), b.bottom - TITLE_Y);
        const sx = toLeft ? cx - r : cx + r;
        const mx = (sx + edge) / 2;
        pts = [[sx, cy], [mx, cy], [mx, ay], [edge, ay]];
      } else if (slot.row === 1) {
        const below = box(inColumn(slot.col, 2) ?? "");
        const gap = below ? (b.bottom + below.top) / 2 : b.bottom + 24;
        const sx = toLeft ? cx - k : cx + k;
        pts = [[sx, cy - k], [sx, gap], [inner, gap], [inner, b.bottom + GAP]];
      } else {
        const above = box(inColumn(slot.col, 2) ?? "");
        const gap = above ? (above.bottom + b.top) / 2 : b.top - 24;
        const sx = toLeft ? cx - k : cx + k;
        pts = [[sx, cy + k], [sx, gap], [inner, gap], [inner, b.top - GAP]];
      }
      const end = pts[pts.length - 1];
      next.push({ id: c.id, d: roundedPath(pts), x: end[0], y: end[1] });
    }
    const plate = plateRef.current ? rel(plateRef.current) : null;
    setHole(plate ? { x: plate.left, y: plate.top, w: plate.right - plate.left, h: plate.bottom - plate.top } : null);
    setSize({ w: map.offsetWidth, h: map.offsetHeight });
    setBranches(next);
  }, [categories]);

  useLayoutEffect(() => {
    measure();
    const map = mapRef.current;
    if (!map) return;
    const observer = new ResizeObserver(measure);
    observer.observe(map);
    return () => observer.disconnect();
  }, [measure]);

  const itemLit = (catId: string, it: UsesItem) => {
    if (!focus) return null;
    if (focus.kind === "project") return it.projects.includes(focus.slug);
    return focus.key === `${catId}:${it.name}`;
  };
  const categoryLit = (c: UsesCategory) => {
    if (!focus) return null;
    return c.items.some((it) => itemLit(c.id, it));
  };
  const projectLit = (slug: string) => {
    if (!focus) return null;
    if (focus.kind === "project") return focus.slug === slug;
    return items.get(focus.key)?.projects.includes(slug) ?? false;
  };
  const state = (lit: boolean | null) => (lit === null ? "" : lit ? styles.lit : styles.dim);

  const focusedItem = focus?.kind === "item" ? items.get(focus.key) : undefined;
  const focusedProject = focus?.kind === "project" ? projects.find((p) => p.slug === focus.slug) : undefined;
  const clear = () => setFocus(null);

  return (
    <div className={styles.root}>
      <div ref={mapRef} className={styles.map}>
        {branches.length > 0 && (
          <svg className={styles.branches} width={size.w} height={size.h} aria-hidden="true">
            {/* Routes pass behind the name plate: cut them out there. */}
            <defs>
              <mask id={maskId} maskUnits="userSpaceOnUse" x={0} y={0} width={size.w} height={size.h}>
                <rect width={size.w} height={size.h} fill="white" />
                {hole && <rect x={hole.x} y={hole.y} width={hole.w} height={hole.h} rx={16} fill="black" />}
              </mask>
            </defs>
            {branches.map((b, i) => {
              const cat = categories.find((c) => c.id === b.id);
              const lit = cat ? state(categoryLit(cat)) : "";
              return (
                <g key={b.id} className={lit} style={{ ["--i" as string]: i }}>
                  <path className={styles.branch} d={b.d} pathLength={1} mask={`url(#${maskId})`} />
                  <circle className={styles.anchor} cx={b.x} cy={b.y} r={4} />
                </g>
              );
            })}
          </svg>
        )}

        <div className={styles.profile}>
          <div ref={photoRef} className={styles.photo}>
            <Image src={avatar} alt={name} fill sizes="132px" priority />
          </div>
          <div ref={plateRef} className={styles.plate}>
          <div className={styles.ident}>
            <p className={styles.name}>{name}</p>
            <p className={styles.role}>{role}</p>
          </div>
          <div className={styles.readout} aria-live="polite">
            {focusedItem ? (
              <>
                <strong>{focusedItem.name}</strong>
                <span>{focusedItem.note}</span>
                <em>
                  {focusedItem.projects.length > 0
                    ? `${labels.usedIn} ${focusedItem.projects.map((s) => projectName[s]).join(", ")}`
                    : labels.notUsed}
                </em>
              </>
            ) : focusedProject ? (
              <>
                <strong>{focusedProject.name}</strong>
                <span>{focusedProject.tagline}</span>
                <em>
                  {toolCount[focusedProject.slug] ?? 0} {labels.tools}
                </em>
              </>
            ) : (
              <span className={styles.hint}>{labels.hint}</span>
            )}
          </div>
          </div>
        </div>

        {ordered.map((c, i) => {
          const slot = SLOTS[c.id];
          return (
            <section
              key={c.id}
              ref={(el) => {
                cardRefs.current[c.id] = el;
              }}
              className={`${styles.card} ${state(categoryLit(c))}`}
              style={{
                gridColumn: slot?.col,
                gridRow: slot?.row,
                ["--i" as string]: i,
              }}
              aria-labelledby={`uses-${c.id}`}
            >
              <header className={styles.cardHead}>
                <h2 id={`uses-${c.id}`} className={styles.cardTitle}>
                  {c.title}
                </h2>
                <span className={styles.count}>{c.items.length}</span>
              </header>
              <p className={styles.blurb}>{c.blurb}</p>
              <ul className={styles.chips}>
                {c.items.map((it) => {
                  const Icon = ICONS[it.icon];
                  const key = `${c.id}:${it.name}`;
                  return (
                    <li key={key}>
                      <button
                        type="button"
                        className={`${styles.chip} ${state(itemLit(c.id, it))}`}
                        title={it.note}
                        onMouseEnter={() => setFocus({ kind: "item", key })}
                        onMouseLeave={clear}
                        onFocus={() => setFocus({ kind: "item", key })}
                        onBlur={clear}
                      >
                        {Icon && <Icon aria-hidden="true" />}
                        {it.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>

      <section className={styles.proof} aria-labelledby="uses-proof">
        <div className={styles.proofHead}>
          <h2 id="uses-proof" className={styles.proofTitle}>
            {labels.proofTitle}
          </h2>
          <p className={styles.blurb}>{labels.proofIntro}</p>
        </div>
        <ul className={styles.projects}>
          {projects.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/work/${p.slug}`}
                className={`${styles.project} ${state(projectLit(p.slug))}`}
                onMouseEnter={() => setFocus({ kind: "project", slug: p.slug })}
                onMouseLeave={clear}
                onFocus={() => setFocus({ kind: "project", slug: p.slug })}
                onBlur={clear}
              >
                <span className={styles.thumb}>
                  <Image src={p.image} alt="" fill sizes="(max-width: 768px) 100vw, 240px" />
                </span>
                <span className={styles.projectName}>{p.name}</span>
                <span className={styles.projectTag}>{p.tagline}</span>
                <span className={styles.count}>
                  {toolCount[p.slug] ?? 0} {labels.tools}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <details className={styles.details}>
        <summary>{labels.detailsTitle}</summary>
        <div className={styles.detailsGrid}>
          {categories.map((c) => (
            <div key={c.id}>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <dl>
                {c.items.map((it) => (
                  <div key={it.name} className={styles.detailRow}>
                    <dt>{it.name}</dt>
                    <dd>{it.note}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
}
