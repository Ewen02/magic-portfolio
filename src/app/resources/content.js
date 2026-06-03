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
  "Ewen Le Quéré",
  "développeur full stack",
  "développeur full stack Paris",
  "développeur React",
  "développeur Next.js",
  "développeur Node.js",
  "développeur NestJS",
  "développeur TypeScript",
  "développeur IA",
  "ingénieur logiciel",
  "freelance développeur",
  "Epitech",
  "RAG",
  "LLM",
  "pipeline RAG",
  "recherche sémantique",
  "SaaS",
  "temps réel",
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
  title: `Portfolio de ${person.name}`,
  description: `${person.name}, ${person.role} diplômé d'Epitech. Spécialisé en React, Next.js, Node.js, NestJS et IA appliquée (RAG, LLM, agents).`,
  headline: <>Ewen Le Quéré, Développeur Full Stack</>,
  subline: (
    <>
      Je suis Ewen, développeur Full Stack diplômé d'Epitech, avec 3 ans d'expérience
      en entreprise et en side-project. Passionné par les architectures modernes, le temps réel et l'IA appliquée.
      <br /><strong>Ouvert à toute opportunité.</strong>
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
          <strong>Ouvert à toute opportunité</strong> — n'hésitez pas à me contacter.
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
            par l'IA, utilisée par des équipes marketing et agences pour gérer des créateurs de contenu à grande échelle.
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
          "Oui, je suis ouvert à toute opportunité : CDI, freelance ou mission. Vous pouvez me contacter par email ou planifier un appel directement depuis cette page.",
      },
      {
        question: "Quelles technologies maîtrises-tu ?",
        answer:
          "Côté frontend : React, Next.js et TypeScript. Côté backend : Node.js, NestJS et Express. Je travaille aussi sur l'IA appliquée (pipelines RAG, LLM, systèmes multi-agents avec LangChain/LangGraph) et les architectures temps réel (WebSocket, SSE, Redis).",
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
            Node.js / Express, NestJS, Prisma, BullMQ, .NET / C#
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
            Flutter / Dart, Figma, Zeplin
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
  title: "Articles",
  description: `Articles et réflexions de ${person.name} sur le développement et la tech.`,
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
// GALLERY
// ============================================================================

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  /** @type {{ src: string, alt: string, orientation: string }[]} */
  images: [],
};

// ============================================================================
// EXPORTS
// ============================================================================

export { person, social, newsletter, home, about, blog, work, gallery, uses, keywords };
