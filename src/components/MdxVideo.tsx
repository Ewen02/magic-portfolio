"use client";

import { useEffect, useRef, useState } from "react";

type MdxVideoProps = {
  src: string;
  poster?: string;
  caption?: string;
  // CSS aspect-ratio of the source, e.g. "16 / 9" or "4 / 5".
  ratio?: string;
  // Narrower frame for portrait videos, e.g. "24rem".
  maxWidth?: string;
};

// Silent demo loop for case studies. Nothing is downloaded until the video
// scrolls into view (preload="none" + poster), it pauses once out of view, and
// visitors who prefer reduced motion get the controls instead of autoplay.
export function MdxVideo({ src, poster, caption, ratio = "16 / 9", maxWidth }: MdxVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReducedMotion(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <figure
      style={{
        width: "100%",
        maxWidth,
        margin: "var(--static-space-20) auto",
      }}
    >
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        controls={reducedMotion}
        aria-label={caption}
        style={{
          display: "block",
          width: "100%",
          aspectRatio: ratio,
          objectFit: "cover",
          background: "#000",
          borderRadius: "var(--radius-m)",
          border: "1px solid var(--neutral-alpha-weak)",
        }}
      />
      {caption && (
        <figcaption
          style={{
            marginTop: "var(--static-space-8)",
            textAlign: "center",
            fontSize: "var(--font-size-body-s)",
            lineHeight: "var(--line-height-body-s)",
            color: "var(--neutral-on-background-weak)",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
