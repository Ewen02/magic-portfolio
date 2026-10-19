"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ICONS } from "@/components/uses/skillMap";
import { typeset } from "@/app/utils/formatDate";
import styles from "./ServicesView.module.scss";

type Offer = {
  title: string;
  description: string;
  price: string;
  deliverables: string[];
  stack: string[];
  proof: string[];
};

type Step = { when: string; title: string; description: string };
type Testimonial = { quote: string; author: string; role: string; link?: string };
type Project = { name: string; image: string };

type ServicesViewProps = {
  title: string;
  eyebrow: string;
  intro: string;
  status: string;
  availability: string;
  labels: Record<"from" | "deliverables" | "stack" | "proof" | "book" | "contact" | "testimonials", string>;
  items: Offer[];
  process: { title: string; steps: Step[] };
  cta: { title: string; description: string };
  testimonials: Testimonial[];
  projects: Record<string, Project>;
  // Readable tool name per logo key, from the /uses data.
  toolNames: Record<string, string>;
  calendarLink: string;
  avatar: string;
  name: string;
};

// A price with a number reads « À partir de 6 000 € »; « Sur devis » stands alone.
const hasAmount = (price: string) => /\d/.test(price);

// French spacing, plus non-breaking hyphens so « ci-dessous » stays whole.
const t = (text: string) => typeset(text).replace(/(\w)-(\w)/g, "$1\u2011$2");

export function ServicesView(props: ServicesViewProps) {
  const { labels, projects } = props;

  return (
    <div className={styles.root}>
      {/* Hero */}
      <header className={styles.hero}>
        <span className={styles.eyebrow}>{props.eyebrow}</span>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.intro}>{t(props.intro)}</p>
        <div className={styles.status}>
          <span className={styles.dot} aria-hidden="true" />
          <span>
            <strong>{props.status}</strong>
            <span>{t(props.availability)}</span>
          </span>
        </div>
        <div className={styles.actions}>
          <a href={props.calendarLink} className={styles.primary} target="_blank" rel="noopener noreferrer">
            {labels.book}
            <span aria-hidden="true">→</span>
          </a>
          <Link href="/contact" className={styles.secondary}>
            {labels.contact}
          </Link>
        </div>
      </header>

      {/* Offers */}
      <section className={styles.offers} aria-label={props.title}>
        {props.items.map((offer) => (
          <article key={offer.title} className={styles.offer}>
            <div className={styles.offerHead}>
              <h2 className={styles.offerTitle}>{offer.title}</h2>
              <p className={styles.price}>
                {hasAmount(offer.price) && <span>{labels.from}</span>}
                <strong>{offer.price}</strong>
              </p>
            </div>
            <p className={styles.offerText}>{t(offer.description)}</p>

            <div>
              <p className={styles.label}>{labels.deliverables}</p>
              <ul className={styles.deliverables}>
                {offer.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>

            <div className={styles.stack} aria-label={labels.stack}>
              {offer.stack.map((key) => {
                const Icon = ICONS[key];
                return Icon ? (
                  <span key={key} className={styles.logo} title={props.toolNames[key] ?? key}>
                    <Icon aria-hidden="true" />
                    <span className={styles.srOnly}>{props.toolNames[key] ?? key}</span>
                  </span>
                ) : null;
              })}
            </div>

            {offer.proof.length > 0 && (
              <div className={styles.proof}>
                <p className={styles.label}>{labels.proof}</p>
                <ul>
                  {offer.proof.map((slug) => {
                    const project = projects[slug];
                    if (!project) return null;
                    return (
                      <li key={slug}>
                        <Link href={`/work/${slug}`} className={styles.proofLink}>
                          <span className={styles.proofThumb}>
                            {project.image && <Image src={project.image} alt="" fill sizes="96px" />}
                          </span>
                          <span className={styles.proofName}>{project.name}</span>
                          <span aria-hidden="true">→</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </article>
        ))}
      </section>

      {/* Process: a real sequence, so the steps are numbered. */}
      <section className={styles.process} aria-labelledby="process-title">
        <h2 id="process-title" className={styles.sectionTitle}>
          {props.process.title}
        </h2>
        <ol className={styles.steps}>
          {props.process.steps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.node}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.when}>{step.when}</span>
              <span className={styles.stepTitle}>{step.title}</span>
              <span className={styles.stepText}>{t(step.description)}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Testimonials */}
      {props.testimonials.length > 0 && (
        <section className={styles.quotes} aria-labelledby="quotes-title">
          <h2 id="quotes-title" className={styles.sectionTitle}>
            {labels.testimonials}
          </h2>
          <div className={styles.quoteGrid}>
            {props.testimonials.map((q) => (
              <figure key={q.role} className={styles.quote}>
                <blockquote>{t(q.quote)}</blockquote>
                <figcaption>
                  <strong>{q.author}</strong>
                  <span>{q.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Call to action */}
      <section className={styles.cta}>
        <span className={styles.ctaAvatar}>
          <Image src={props.avatar} alt={props.name} fill sizes="72px" />
        </span>
        <h2 className={styles.ctaTitle}>{t(props.cta.title)}</h2>
        <p className={styles.ctaText}>{t(props.cta.description)}</p>
        <div className={styles.actions}>
          <a href={props.calendarLink} className={styles.primary} target="_blank" rel="noopener noreferrer">
            {labels.book}
            <span aria-hidden="true">→</span>
          </a>
          <Link href="/contact" className={styles.secondary}>
            {labels.contact}
          </Link>
        </div>
      </section>
    </div>
  );
}
