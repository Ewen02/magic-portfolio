// ============================================================================
// PERSONAL INFO
// ============================================================================

const person = {
  firstName: "Ewen",
  lastName: "Le Quéré",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Développeur Full Stack",
  avatar: "/images/avatar.jpg",
  email: "ewen.le-quere@epitech.eu",
  location: "Europe/Paris",
  languages: ["Français", "Anglais"],
};

// ============================================================================
// SEO KEYWORDS (utilisés dans les metadata de toutes les pages)
// ============================================================================

const keywords = [
  // Mot-clé principal et variantes commerciales (freelance + Paris)
  "développeur full stack freelance Paris",
  "développeur full stack freelance",
  "développeur freelance Paris",
  "développeur web freelance Paris",
  "développeur full stack Paris",
  "développeur full stack",
  "freelance développeur",
  "Ewen Le Quéré",
  // Technos
  "développeur React",
  "développeur Next.js",
  "développeur Node.js",
  "développeur NestJS",
  "développeur TypeScript",
  "développeur Swift",
  "développeur iOS",
  // Spécialité IA (différenciation)
  "développeur IA freelance",
  "développeur IA Paris",
  "RAG",
  "LLM",
  "pipeline RAG",
  "recherche sémantique",
  // Services & expertise
  "création site vitrine",
  "SEO technique",
  "SaaS",
  "temps réel",
  "ingénieur logiciel",
  "Epitech",
  "portfolio développeur",
];

// ============================================================================
// SOCIAL LINKS
// ============================================================================

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Ewen02",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ewen-le-qu%C3%A9r%C3%A9/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:ewen.le-quere@epitech.eu",
  },
];

// ============================================================================
// NEWSLETTER (disabled)
// ============================================================================

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>,
};

// ============================================================================
// HOME PAGE
// ============================================================================

const home = {
  label: "Home",
  title: `${person.name} — Développeur Full Stack Freelance à Paris`,
  description: `Développeur full stack freelance à Paris, diplômé d'Epitech. Disponible pour vos projets web : React, Next.js, Node.js, NestJS et IA appliquée (RAG, LLM, agents). Échangeons sur votre projet.`,
  headline: <>Ewen Le Quéré, Développeur Full Stack Freelance</>,
  subline: (
    <>
      Je suis Ewen, développeur Full Stack diplômé d'Epitech, avec 3 ans d'expérience
      en entreprise et en side-project. Passionné par les architectures modernes, le temps réel et l'IA appliquée.
      <br />Actuellement en CDI chez Favikon, <strong>ouvert aux missions freelance.</strong>
    </>
  ),
};

// ============================================================================
// ABOUT PAGE
// ============================================================================

const about = {
  label: "About",
  title: "À propos",
  description: `${person.name}, ${person.role} basé à Paris. 3 ans d'expérience en SaaS, temps réel et IA appliquée.`,

  tableOfContent: {
    display: true,
    subItems: false,
  },

  avatar: {
    display: true,
  },

  calendar: {
    display: true,
    link: "https://cal.com/ewenlq/30min",
  },

  // --------------------------------------------------------------------------
  // INTRODUCTION
  // --------------------------------------------------------------------------
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>
          Développeur Full Stack diplômé d'Epitech (Bac+5), je dispose de <strong>3 ans d'expérience</strong> en
          entreprise et en freelance sur des projets variés : SaaS B2B, plateformes marketing, systèmes temps réel et IA appliquée.
        </p>
        <p>
          Mon expertise couvre le <strong>frontend</strong> (React, Next.js), le <strong>backend</strong> (Node.js,
          NestJS) et l'intégration de <strong>systèmes IA</strong> (LLM, pipelines RAG, agents, recherche sémantique).
        </p>
        <p>
          Je conçois également des <strong>produits SaaS complets</strong> en side-project, de l'architecture monorepo au déploiement.
        </p>
        <p>
          Actuellement en <strong>CDI chez Favikon</strong> et <strong>ouvert aux missions freelance</strong> — n'hésitez pas à me contacter.
        </p>
      </>
    ),
  },

  // --------------------------------------------------------------------------
  // WORK EXPERIENCE (ordre chronologique inversé)
  // --------------------------------------------------------------------------
  work: {
    display: true,
    title: "Expériences",
    experiences: [
      {
        company: "Favikon",
        timeframe: "2025 - Présent",
        role: "Développeur Full Stack",
        achievements: [
          <>
            Développement de features sur une plateforme <strong>SaaS B2B de marketing d'influence</strong> augmentée
            par l'IA, à l'échelle : <strong>210K+ utilisateurs</strong>, <strong>11,5M+ créateurs</strong> et <strong>30M+ posts indexés</strong>.
          </>,
          <>
            <strong>Frontend :</strong> Architecture modulaire Next.js/React, gestion d'état (React Query, Redux),
            temps réel (Socket.io, SSE), widgets drag & drop, streaming token-par-token.
          </>,
          <>
            <strong>Backend :</strong> Modules métier critiques (campaigns, discovery, messaging), bases de données
            spécialisées (MongoDB, Elasticsearch, Qdrant, Redis), pipelines temps réel.
          </>,
          <>
            <strong>IA :</strong> Systèmes multi-agents (LangChain/LangGraph), streaming IA, recherche sémantique,
            génération automatisée de messages et recommandations.
          </>,
          <>
            <strong>Mobile :</strong> Développement d'une application <strong>iOS native en Swift</strong>.
          </>,
        ],
        images: [],
      },
      {
        company: "Moment",
        timeframe: "Avril - Octobre 2025",
        role: "Stage - Développeur Full Stack",
        achievements: [
          <>
            Développement de la plateforme <strong>Mood</strong> : évolutions frontend (Next.js, TypeScript),
            contribution au Design System pour améliorer la cohérence des interfaces.
          </>,
          <>
            Intégration de l'API <strong>Universal Music France</strong> : génération d'un client avec TypeSpec,
            intégration backend NestJS, automatisation de la gestion des playlists.
          </>,
        ],
        images: [],
      },
      {
        company: "Coexya",
        timeframe: "2024 - 2025",
        role: "Stage - Développeur Full Stack",
        achievements: [
          <>
            Implémentation d'un logiciel <strong>SaaS de comparaison de marques déposées</strong> et dessins/modèles
            industriels. Stack : TypeScript, Angular, .NET/C#, MySQL.
          </>,
        ],
        images: [],
      },
      {
        company: "Hercules Thrustmaster",
        timeframe: "2023 - 2025",
        role: "Développeur Full Stack (Freelance)",
        achievements: [
          <>
            Conception et développement d'un <strong>système d'affiliation</strong> complet pour le département
            marketing. Projet stratégique en production avec évolutions continues.
          </>,
          <>
            Collaboration interservices (marketing, légal, comptabilité, esport) en méthodologie
            <strong> agile</strong> (Kanban, sprints). Stack : PHP/Laravel, CodeIgniter 4, MySQL.
          </>,
        ],
        images: [],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // STUDIES
  // --------------------------------------------------------------------------
  studies: {
    display: true,
    title: "Formation",
    institutions: [
      {
        name: "Epitech Paris",
        description: <>Promotion 2025 - Expert en Technologies de l'Information (RNCP 7, Bac+5)</>,
      },
      {
        name: "Epitech Berlin",
        description: <>2024 - Semestre international & Certification développement jeu vidéo</>,
      },
    ],
  },

  // --------------------------------------------------------------------------
  // FAQ (alimente aussi le schema FAQPage pour les rich snippets Google)
  // --------------------------------------------------------------------------
  faq: {
    display: true,
    title: "Questions fréquentes",
    items: [
      {
        question: "Es-tu disponible pour de nouvelles opportunités ?",
        answer:
          "Je suis actuellement en CDI chez Favikon. Je reste ouvert aux missions freelance en parallèle. Vous pouvez me contacter par email ou planifier un appel directement depuis cette page.",
      },
      {
        question: "Quelles technologies maîtrises-tu ?",
        answer:
          "Côté frontend : React, Next.js et TypeScript. Côté backend : Node.js, NestJS et Express. Je développe aussi en Swift (application iOS chez Favikon). Je travaille sur l'IA appliquée (pipelines RAG, LLM, systèmes multi-agents avec LangChain/LangGraph), les architectures temps réel (WebSocket, SSE, Redis), ainsi que le SEO technique, l'accessibilité et les tests (Jest).",
      },
      {
        question: "Gères-tu le SEO et la performance d'un site ?",
        answer:
          "Oui. Je mets en place le SEO technique de bout en bout : metadata et Open Graph par page, données structurées schema.org pour les rich snippets, sitemap et robots, suivi via la Search Console, plus l'optimisation des Core Web Vitals et de l'accessibilité. C'est notamment ce que j'ai fait sur ce portfolio et sur des sites vitrines clients.",
      },
      {
        question: "As-tu de l'expérience en IA et LLM ?",
        answer:
          "Oui. J'ai conçu des pipelines RAG complets (parsing, chunking, embeddings, reranking), des systèmes multi-agents et du streaming IA token-par-token en production, notamment sur des plateformes SaaS B2B.",
      },
      {
        question: "Travailles-tu en freelance ?",
        answer:
          "Oui, je réalise des missions freelance. J'ai par exemple développé from scratch un système d'affiliation complet pour Hercules Thrustmaster, en production depuis 2023.",
      },
      {
        question: "Où es-tu basé ?",
        answer:
          "Je suis basé à Paris, en France. Je travaille en français et en anglais, sur site comme à distance.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // TESTIMONIALS (alimente aussi le schema Review pour les rich snippets Google)
  // --------------------------------------------------------------------------
  testimonials: {
    display: true,
    title: "Recommandations",
    items: [
      {
        quote:
          "Ewen a conçu et développé notre système d'affiliation de A à Z. Au-delà de sa maîtrise technique, il a su comprendre nos enjeux marketing et dialoguer avec l'ensemble des services (légal, comptabilité, esport). Le projet est en production depuis 2023 et continue d'évoluer : fiable, autonome et force de proposition.",
        author: "Équipe Marketing",
        role: "Hercules Thrustmaster",
        link: "https://www.thrustmaster.com/fr-fr/affiliate/",
      },
      {
        quote:
          "Ewen a réalisé le site vitrine de notre cabinet dentaire. À l'écoute, réactif et professionnel, il a livré un site moderne, rapide et clair qui reflète parfaitement notre activité. La prise de rendez-vous en ligne fonctionne sans accroc et nos patients nous font régulièrement des retours positifs sur le site.",
        author: "Cabinet dentaire",
        role: "Site vitrine, Bures-sur-Yvette",
        link: "https://cabinetdentairedesboeuf.fr/",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // TECHNICAL SKILLS
  // --------------------------------------------------------------------------
  technical: {
    display: true,
    title: "Compétences techniques",
    skills: [
      {
        title: "Frontend",
        description: (
          <>
            React / Next.js, TypeScript, Tailwind CSS, React Query, Redux Toolkit, Socket.io / SSE, Angular
          </>
        ),
        images: [],
      },
      {
        title: "Backend",
        description: (
          <>
            Node.js / Express, NestJS, Prisma, BullMQ, Stripe, .NET / C#
          </>
        ),
        images: [],
      },
      {
        title: "IA & Agents",
        description: (
          <>
            LangChain / LangGraph, Pipeline RAG (chunking, embeddings, reranking), Systèmes multi-agents, Streaming IA (SSE), Qdrant / Recherche sémantique
          </>
        ),
        images: [],
      },
      {
        title: "Bases de données",
        description: (
          <>
            MongoDB, PostgreSQL / MySQL, Elasticsearch, Qdrant (vector DB), Redis
          </>
        ),
        images: [],
      },
      {
        title: "SEO, Tests & Qualité",
        description: (
          <>
            SEO technique (metadata, sitemap, schema.org / rich snippets, Search Console), Accessibilité (a11y), Core Web Vitals, Tests unitaires & d'intégration (Jest)
          </>
        ),
        images: [],
      },
      {
        title: "DevOps & Outils",
        description: (
          <>
            Git (GitHub, GitLab), Docker, CI/CD, Turborepo / pnpm, TypeSpec
          </>
        ),
        images: [],
      },
      {
        title: "Mobile & Design",
        description: (
          <>
            Swift (iOS), Flutter / Dart, Figma, Zeplin
          </>
        ),
        images: [],
      },
    ],
  },
};

// ============================================================================
// BLOG
// ============================================================================

const blog = {
  label: "Blog",
  title: "Articles tech : IA, temps réel & architecture",
  description: `Articles techniques de ${person.name}, développeur full stack freelance à Paris : pipelines RAG, LLM, systèmes temps réel (WebSocket, SSE) et architectures modernes.`,
};

// ============================================================================
// WORK / PROJECTS
// ============================================================================

const work = {
  label: "Work",
  title: "Mes projets",
  description: `Projets de développement fullstack par ${person.name} : SaaS, IA, temps réel et architectures modernes.`,
};

// ============================================================================
// USES (stack & outils)
// ============================================================================

const uses = {
  label: "Uses",
  title: "Stack & outils",
  description: `Les technologies, langages et outils qu'utilise ${person.name} au quotidien : frontend, backend, IA, bases de données et DevOps.`,
  intro:
    "Voici les outils et technologies que j'utilise au quotidien pour concevoir des produits web modernes, performants et maintenables — du frontend à l'IA en passant par l'infrastructure.",
  categories: [
    {
      title: "Langages",
      items: [
        { name: "TypeScript", note: "Mon langage principal, frontend comme backend." },
        { name: "JavaScript", note: "Pour le runtime Node.js et le web." },
        { name: "Swift", note: "Application iOS native chez Favikon." },
        { name: "Dart", note: "Développement mobile avec Flutter." },
        { name: "C# / .NET", note: "Backend en environnement entreprise." },
        { name: "PHP", note: "Laravel et CodeIgniter sur des projets historiques." },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "React", note: "La base de toutes mes interfaces." },
        { name: "Next.js", note: "App Router, SSR/SSG, streaming, le framework que je préfère." },
        { name: "Tailwind CSS", note: "Pour styliser vite et rester cohérent." },
        { name: "React Query", note: "Cache serveur, invalidation et optimistic updates." },
        { name: "Redux Toolkit", note: "State global quand c'est justifié." },
        { name: "Framer Motion", note: "Animations fluides et interactions." },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", note: "Runtime serveur de prédilection." },
        { name: "NestJS", note: "Architecture modulaire et typée pour les APIs." },
        { name: "Express", note: "Pour les services légers et le streaming SSE." },
        { name: "Prisma", note: "ORM typé pour PostgreSQL." },
        { name: "BullMQ", note: "Files d'attente et jobs asynchrones." },
      ],
    },
    {
      title: "IA & Données",
      items: [
        { name: "LangChain / LangGraph", note: "Orchestration d'agents et workflows LLM." },
        { name: "Qdrant", note: "Vector database pour la recherche sémantique." },
        { name: "OpenAI", note: "Embeddings et génération." },
        { name: "Redis", note: "Cache, état temps réel et pub/sub." },
        { name: "PostgreSQL / MongoDB", note: "Bases relationnelles et documentaires." },
        { name: "Elasticsearch", note: "Recherche full-text à grande échelle." },
      ],
    },
    {
      title: "Temps réel",
      items: [
        { name: "Socket.IO", note: "WebSocket bidirectionnel pour les rooms et le live." },
        { name: "Server-Sent Events", note: "Streaming unidirectionnel pour les réponses IA." },
      ],
    },
    {
      title: "SEO & Qualité",
      items: [
        { name: "Metadata & Open Graph", note: "Balises title/description et partage social par page." },
        { name: "Schema.org", note: "Données structurées pour les rich snippets (Person, FAQ, Review)." },
        { name: "Sitemap & robots", note: "Indexation maîtrisée et crawl propre." },
        { name: "Search Console", note: "Suivi de l'indexation et des performances de recherche." },
        { name: "Accessibilité (a11y)", note: "Contrastes, hiérarchie de titres, navigation clavier." },
        { name: "Jest", note: "Tests unitaires et d'intégration." },
      ],
    },
    {
      title: "DevOps & Outils",
      items: [
        { name: "Git", note: "GitHub et GitLab au quotidien." },
        { name: "Docker", note: "Conteneurisation et environnements reproductibles." },
        { name: "Turborepo / pnpm", note: "Monorepos performants." },
        { name: "Vercel / Railway", note: "Déploiement frontend et backend." },
        { name: "GitHub Actions", note: "CI/CD automatisée." },
        { name: "Figma", note: "Design et intégration." },
      ],
    },
  ],
};

// ============================================================================
// CONTACT
// ============================================================================

const contact = {
  label: "Contact",
  title: "Me contacter",
  description: `Contactez ${person.name}, ${person.role} basé à Paris, pour une mission freelance, une collaboration ou toute question.`,
  intro:
    "Une mission freelance, un projet web ou une simple question ? Le plus simple est de planifier un appel ou de m'écrire directement — je réponds rapidement.",
  calendar: {
    display: true,
    link: "https://cal.com/ewenlq/30min",
  },
};

// ============================================================================
// EXPORTS
// ============================================================================

export { person, social, newsletter, home, about, blog, work, uses, contact, keywords };
