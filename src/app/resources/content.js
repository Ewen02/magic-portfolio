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
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Développeur Full Stack</>,
  subline: (
    <>
      Je suis Ewen, développeur Full Stack diplômé d'Epitech, avec 3 ans d'expérience
      en entreprise. Passionné par les architectures modernes, le temps réel et l'IA appliquée.
    </>
  ),
};

// ============================================================================
// ABOUT PAGE
// ============================================================================

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,

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
          entreprise sur des projets variés : SaaS B2B, plateformes marketing, systèmes temps réel et IA appliquée.
        </p>
        <p>
          Mon expertise couvre le <strong>frontend</strong> (React, Next.js), le <strong>backend</strong> (Node.js,
          NestJS, PHP) et l'intégration de <strong>systèmes IA</strong> (LLM, agents, recherche sémantique).
          Je recherche une opportunité à partir de <strong>novembre 2025</strong>.
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
        role: "Développeur Full Stack (Frontend Focus)",
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
            React / Next.js, TypeScript, React Query, Redux Toolkit, Socket.io / SSE, Angular
          </>
        ),
        images: [],
      },
      {
        title: "Backend",
        description: (
          <>
            Node.js / Express, NestJS, PHP / Laravel, .NET / C#
          </>
        ),
        images: [],
      },
      {
        title: "IA & Agents",
        description: (
          <>
            LangChain / LangGraph, Systèmes multi-agents, Streaming IA (SSE), Recherche sémantique (embeddings)
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
            Git (GitHub, GitLab), Docker, CI/CD, TypeSpec
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
  description: `Read what ${person.name} has been up to recently`,
};

// ============================================================================
// WORK / PROJECTS
// ============================================================================

const work = {
  label: "Work",
  title: "Mes projets",
  description: `Design and dev projects by ${person.name}`,
};

// ============================================================================
// GALLERY
// ============================================================================

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    { src: "/images/gallery/img-01.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-02.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-03.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-04.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-05.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-06.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-07.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-08.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-09.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-10.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-11.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-12.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-13.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-14.jpg", alt: "image", orientation: "horizontal" },
  ],
};

// ============================================================================
// EXPORTS
// ============================================================================

export { person, social, newsletter, home, about, blog, work, gallery };
