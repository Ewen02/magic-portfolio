"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ICONS, SLOTS } from "./skillMap";
import type { UsesCategory } from "./SkillTree";
import styles from "./UsesTeaser.module.scss";

type UsesTeaserProps = {
  avatar: string;
  name: string;
  categories: UsesCategory[];
  labels: { eyebrow: string; title: string; text: string; cta: string; tools: string };
};

// Logos shown per branch in the preview; the full list lives on /uses.
const LOGOS_PER_BRANCH = 4;

// Home page preview of the /uses skill map: the same layout in miniature,
// the whole card links to the full map.
export function UsesTeaser({ avatar, name, categories, labels }: UsesTeaserProps) {
  const total = new Set(categories.flatMap((c) => c.items.map((it) => it.name))).size;

  return (
    <Link href="/uses" className={styles.card}>
      <div className={styles.copy}>
        <span className={styles.eyebrow}>
          {labels.eyebrow} · {total} {labels.tools}
        </span>
        <h2 className={styles.title}>{labels.title}</h2>
        <p className={styles.text}>{labels.text}</p>
        <span className={styles.cta}>
          {labels.cta}
          <span aria-hidden="true">→</span>
        </span>
      </div>

      <div className={styles.map} aria-hidden="true">
        {/* Straight spokes from the photo to each branch, drawn under the cells. */}
        <svg className={styles.spokes} viewBox="0 0 300 300" preserveAspectRatio="none">
          {categories.map((c) => {
            const slot = SLOTS[c.id];
            if (!slot) return null;
            return (
              <line
                key={c.id}
                x1={150}
                y1={150}
                x2={(slot.col - 0.5) * 100}
                y2={(slot.row - 0.5) * 100}
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
        </svg>

        <div className={styles.hub}>
          <span className={styles.photo}>
            <Image src={avatar} alt={name} fill sizes="72px" />
          </span>
        </div>

        {categories.map((c) => {
          const slot = SLOTS[c.id];
          if (!slot) return null;
          return (
            <div key={c.id} className={styles.cell} style={{ gridColumn: slot.col, gridRow: slot.row }}>
              <span className={styles.cellTitle}>{c.title}</span>
              <span className={styles.logos}>
                {c.items.slice(0, LOGOS_PER_BRANCH).map((it) => {
                  const Icon = ICONS[it.icon];
                  return Icon ? <Icon key={it.name} /> : null;
                })}
              </span>
            </div>
          );
        })}
      </div>
    </Link>
  );
}
