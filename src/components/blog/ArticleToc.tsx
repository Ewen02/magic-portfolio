"use client";

import { useEffect, useState } from "react";
import styles from "./Article.module.scss";

type Heading = { id: string; text: string };

// Contents of the article, highlighting the section being read.
export function ArticleToc({ headings, label }: { headings: Heading[]; label: string }) {
  const [active, setActive] = useState(headings[0]?.id ?? "");

  useEffect(() => {
    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    // The current section is the last heading above the upper third of the screen.
    const update = () => {
      const line = window.innerHeight * 0.3;
      let current = elements[0].id;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav className={styles.toc} aria-label={label}>
      <p className={styles.tocLabel}>{label}</p>
      <ol>
        {headings.map((h) => (
          <li key={h.id}>
            <a href={`#${h.id}`} aria-current={active === h.id ? "location" : undefined}>
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Thin bar at the top of the screen that fills as the article is read.
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const article = document.querySelector("article");
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      setProgress(total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 1);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <div className={styles.progress} style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />;
}
