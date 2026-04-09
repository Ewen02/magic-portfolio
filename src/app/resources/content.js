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
  location: "Europe/Paris",
  languages: ["Français", "Anglais"],
};

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
    link: "ewen.le-quere@epitech.eu",
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
  headline: <>Développeur Full Stack</>,
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

export { person, social, newsletter, home, about, blog, work, gallery };
