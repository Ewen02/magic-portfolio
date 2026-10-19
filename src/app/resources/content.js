// ============================================================================
// PERSONAL INFO
// ============================================================================

const person = {
  firstName: "Ewen",
  lastName: "Le Quéré",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Lead Développeur Full Stack & IA",
  avatar: "/images/ewen-le-quere.jpg",
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
  "lead développeur full stack",
  "lead développeur IA",
  "lead développeur freelance Paris",
  "tech lead freelance",
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
    name: "X",
    icon: "x",
    link: "https://x.com/ewenlq",
  },
  {
    name: "Malt",
    icon: "openLink",
    link: "https://www.malt.fr/profile/ewenlequere",
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
  title: `${person.name} | Lead Développeur Full Stack & IA, freelance à Paris`,
  description: `Lead développeur full stack & IA freelance à Paris, diplômé d'Epitech. Lead technique d'une app iOS publiée sur l'App Store. React, Next.js, NestJS, Swift et IA en production (agents, MCP, RAG).`,
  headline: <>Ewen Le Quéré, Lead Développeur Full Stack & IA</>,
  subline: (
    <>
      Je suis Ewen, diplômé d'Epitech, avec 3 ans d'expérience. J'ai porté le lead technique de Krown,
      une app iOS publiée sur l'App Store, et je conçois des produits IA en production, de l'architecture au déploiement.
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
  description: `${person.name}, ${person.role} basé à Paris. Lead technique d'une app iOS publiée sur l'App Store, 3 ans d'expérience en SaaS et IA appliquée.`,

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
          <strong>Lead développeur Full Stack & IA</strong>, diplômé d'Epitech (Bac+5), avec <strong>3 ans d'expérience</strong> en
          entreprise et en freelance. Je porte des produits de bout en bout : architecture, développement, mise en production
          et standards d'équipe (CI, tests, process de release).
        </p>
        <p>
          Chez Favikon, j'ai pris le <strong>lead technique de Krown</strong>, le produit B2C : une app iOS native partie d'un
          repo vide et publiée sur l'<strong>App Store</strong> en cinq mois et demi, avec une API NestJS, un web Next.js et un
          coach IA outillé par un serveur MCP.
        </p>
        <p>
          Mon expertise couvre l'<strong>IA appliquée en production</strong> (agents LLM, serveurs MCP, pipelines RAG, recherche
          sémantique, évaluation de modèles), le <strong>frontend</strong> (React, Next.js), le <strong>backend</strong> (Node.js,
          NestJS) et le <strong>mobile</strong> (Swift, SwiftUI).
        </p>
        <p>
          En parallèle, je lance mes propres produits, comme <strong>Nightprint</strong> et <strong>Sidetown</strong>, du monorepo
          au déploiement sur mon propre serveur.
        </p>
        <p>
          Actuellement en <strong>CDI chez Favikon</strong> et <strong>ouvert aux missions freelance</strong>. N'hésitez pas à me contacter.
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
        role: "Lead Développeur Full Stack & IA",
        achievements: [
          <>
            <strong>Lead technique de Krown</strong>, le produit B2C : app <strong>iOS native (SwiftUI)</strong> pour créateurs
            de contenu, d'un repo vide à l'<strong>App Store</strong> en 5 mois et demi. Architecture posée dès le premier commit :
            monorepo (SwiftUI, NestJS, Next.js, Kotlin) et <strong>API NestJS hexagonale</strong> (ports et adapters,
            use-cases testés sur des fakes en mémoire), puis pilotage technique d'une équipe de 4 développeurs.
          </>,
          <>
            <strong>Cadre d'ingénierie :</strong> 13 guides d'architecture, contrats partagés générés (JSON Schema vers Swift, TypeScript et Kotlin),
            process de release par promotion, règles de branches imposées par hooks, <strong>~10 000 tests</strong> automatisés,
            conformité App Store et billing StoreKit 2 côté serveur.
          </>,
          <>
            <strong>IA :</strong> conception de <strong>Koach</strong>, l'agent IA de l'app : agent LLM outillé par un serveur MCP,
            évaluation de 13 modèles, red-teaming, limites de coût et de temps imposées dans le code, réponses streamées en SSE.
          </>,
          <>
            <strong>Plateforme SaaS B2B</strong> de marketing d'influence (<strong>210K+ utilisateurs</strong>,{" "}
            <strong>11,5M+ créateurs</strong>, <strong>30M+ posts</strong>) : architecture frontend Next.js/React, temps réel
            (Socket.io, SSE), systèmes multi-agents (LangChain/LangGraph), modules backend (campaigns, discovery, messaging) sur MongoDB, Elasticsearch, Qdrant et Redis.
          </>,
        ],
        images: [],
      },
      {
        company: "Side-projects",
        timeframe: "2026",
        role: "Conception, développement et mise en production",
        achievements: [
          <>
            <strong>Nightprint</strong> (nightprint.dev) : l'architecture logicielle dessinée en machines 3D interactives
            (WebGPU, React Three Fiber), avec un importeur IA qui dessine un repo GitHub à partir de son propre code. Open source.
          </>,
          <>
            <strong>Sidetown</strong> (sidetown.dev) : les side-projects d'un développeur rendus en ville isométrique par un moteur
            3D vers SVG écrit from scratch. Next.js 16, Drizzle, Stripe, lancé en 11 jours avec des paiements réels.
          </>,
          <>
            <strong>CorpusAI</strong> : SaaS d'IA conversationnelle par documents, pipeline RAG complet (chunking, embeddings,
            reranking hybride), streaming SSE, billing Stripe, monorepo Turborepo.
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
          "Côté frontend : React, Next.js et TypeScript. Côté backend : Node.js, NestJS et Express. Côté mobile : Swift et SwiftUI (lead technique de l'app iOS Krown chez Favikon). Je travaille sur l'IA appliquée (agents LLM, serveurs MCP, pipelines RAG, systèmes multi-agents avec LangChain/LangGraph), les architectures temps réel (WebSocket, SSE, Redis), ainsi que le SEO technique, l'accessibilité et les tests (Jest, Vitest, Playwright).",
      },
      {
        question: "Gères-tu le SEO et la performance d'un site ?",
        answer:
          "Oui. Je mets en place le SEO technique de bout en bout : metadata et Open Graph par page, données structurées schema.org pour les rich snippets, sitemap et robots, suivi via la Search Console, plus l'optimisation des Core Web Vitals et de l'accessibilité. C'est notamment ce que j'ai fait sur ce portfolio et sur des sites vitrines clients.",
      },
      {
        question: "As-tu déjà mené un projet en tant que lead ?",
        answer:
          "Oui. Chez Favikon, j'ai pris le lead technique de Krown, le produit B2C, d'un repo vide à l'App Store : architecture du monorepo, standards de code, process de release, CI, soumission Apple et pilotage technique des autres développeurs du projet.",
      },
      {
        question: "As-tu de l'expérience en IA et LLM ?",
        answer:
          "Oui, en production. J'ai conçu Koach, l'agent IA de l'app Krown, outillé par un serveur MCP (évaluation de 13 modèles, red-teaming, garde-fous dans le code, réponses streamées en SSE). J'ai aussi travaillé sur des systèmes multi-agents pour la plateforme SaaS B2B de Favikon, et construit un pipeline RAG complet (parsing, chunking, embeddings, reranking hybride) sur CorpusAI.",
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
        title: "Lead technique & Architecture",
        description: (
          <>
            Architecture hexagonale, monorepos polyglottes (Turborepo, pnpm), contrats partagés générés (JSON Schema, quicktype), process de release et règles de branches, CI/CD, revue de code, conformité App Store
          </>
        ),
        images: [],
      },
      {
        title: "IA & Agents",
        description: (
          <>
            Agents LLM (Claude, OpenRouter), serveurs MCP, LangChain / LangGraph, pipelines RAG (chunking, embeddings, reranking), évaluation de modèles et red-teaming, streaming IA (SSE), Qdrant / recherche sémantique
          </>
        ),
        images: [],
      },
      {
        title: "Frontend",
        description: (
          <>
            React / Next.js, TypeScript, Tailwind CSS, React Query, Redux Toolkit, three.js / React Three Fiber (WebGPU), Socket.io / SSE, Angular
          </>
        ),
        images: [],
      },
      {
        title: "Backend",
        description: (
          <>
            Node.js / Express, NestJS, Prisma, Drizzle, BullMQ, Stripe, Better Auth, .NET / C#
          </>
        ),
        images: [],
      },
      {
        title: "Mobile",
        description: (
          <>
            Swift / SwiftUI, WidgetKit, Live Activities, StoreKit 2, Flutter / Dart
          </>
        ),
        images: [],
      },
      {
        title: "Bases de données",
        description: (
          <>
            MongoDB, PostgreSQL (Neon) / MySQL, Elasticsearch, Qdrant (vector DB), Redis
          </>
        ),
        images: [],
      },
      {
        title: "SEO, Tests & Qualité",
        description: (
          <>
            Tests unitaires et d'intégration (Jest, Vitest), tests E2E (Playwright), snapshot tests iOS, SEO technique (metadata, sitemap, schema.org, Search Console), accessibilité, Core Web Vitals
          </>
        ),
        images: [],
      },
      {
        title: "DevOps & Outils",
        description: (
          <>
            Git (GitHub, GitLab, Bitbucket), Docker, GitHub Actions, VPS auto-hébergé (Caddy, Docker Compose), TypeSpec
          </>
        ),
        images: [],
      },
      {
        title: "Design",
        description: (
          <>
            Figma, Zeplin, design systems (Atomic Design, design tokens)
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
  description: `Les technologies qu'utilise ${person.name} en production, reliées aux projets qui les prouvent : frontend, mobile, backend, IA, données, qualité et DevOps.`,
  intro:
    "Les technologies que j'utilise en production, en branches autour de moi : le côté client à gauche, le côté serveur à droite, l'IA en haut et la qualité en bas. Chaque outil est relié aux projets où je m'en sers.",
  labels: {
    hint: "Survolez un outil ou un projet pour voir le lien.",
    usedIn: "Utilisé dans",
    notUsed: "Hors des projets présentés ici.",
    tools: "outils",
    projectsLabel: "Survolez un projet",
    teaserEyebrow: "Setup",
    teaserTitle: "Ma stack, en carte",
    teaserText: "Les outils que j'utilise en production, en branches autour de moi, chacun relié aux projets qui le prouvent.",
    teaserCta: "Explorer la carte",
    detailsTitle: "Le détail, outil par outil",
  },
  // Projets qui prouvent les outils (slugs des pages /work).
  projects: [
    { slug: "krown", name: "Krown", tagline: "App iOS B2C, lead technique", image: "/images/projects/krown/hero.jpg" },
    { slug: "nightprint", name: "Nightprint", tagline: "L'architecture en machines 3D", image: "/images/projects/nightprint/cover-01.jpg" },
    { slug: "sidetown", name: "Sidetown", tagline: "Des side-projects en ville", image: "/images/projects/sidetown/cover-01.jpg" },
    { slug: "corpusai", name: "CorpusAI", tagline: "SaaS d'IA par documents", image: "/images/projects/corpusai/cover-01.png" },
    { slug: "favikon", name: "Favikon", tagline: "SaaS B2B d'influence", image: "/images/projects/favikon/cover-01.png" },
  ],
  categories: [
    {
      id: "frontend",
      title: "Frontend",
      blurb: "Interfaces rapides, typées et accessibles.",
      items: [
        { name: "React", icon: "react", note: "La base de toutes mes interfaces.", projects: ["krown", "nightprint", "sidetown", "corpusai", "favikon"] },
        { name: "Next.js", icon: "nextdotjs", note: "App Router, SSR et streaming : mon framework de référence.", projects: ["krown", "nightprint", "sidetown", "corpusai", "favikon"] },
        { name: "Tailwind CSS", icon: "tailwindcss", note: "Styliser vite en restant cohérent, à partir de design tokens.", projects: ["krown", "nightprint", "sidetown", "corpusai"] },
        { name: "three.js / R3F", icon: "threedotjs", note: "Scènes 3D en WebGPU, avec repli WebGL2.", projects: ["nightprint"] },
        { name: "React Query", icon: "reactquery", note: "Cache serveur, invalidation et optimistic updates.", projects: ["corpusai", "favikon"] },
        { name: "Redux Toolkit", icon: "redux", note: "State global quand c'est justifié.", projects: ["favikon"] },
        { name: "Figma", icon: "figma", note: "Maquettes et design systems en Atomic Design.", projects: ["krown"] },
      ],
    },
    {
      id: "ai",
      title: "IA & Agents",
      blurb: "Des agents en production, outillés et évalués.",
      items: [
        { name: "MCP", icon: "mcp", note: "Serveurs d'outils pour agents LLM, branchés sur les use-cases.", projects: ["krown"] },
        { name: "Claude", icon: "anthropic", note: "Génération en streaming, raisonnement affiché en direct, prompt caching.", projects: ["nightprint"] },
        { name: "OpenAI", icon: "openai", note: "Embeddings et génération.", projects: ["corpusai"] },
        { name: "LangChain / LangGraph", icon: "langchain", note: "Orchestration d'agents et workflows LLM.", projects: ["favikon"] },
        { name: "RAG", icon: "rag", note: "Chunking, embeddings et reranking hybride.", projects: ["corpusai"] },
        { name: "Qdrant", icon: "vector", note: "Base vectorielle pour la recherche sémantique.", projects: ["corpusai", "favikon"] },
        { name: "Évals & red-teaming", icon: "evals", note: "Comparer les modèles et attaquer l'agent avant la sortie.", projects: ["krown"] },
      ],
    },
    {
      id: "backend",
      title: "Backend & temps réel",
      blurb: "APIs modulaires, jobs asynchrones et streaming.",
      items: [
        { name: "Node.js", icon: "nodedotjs", note: "Runtime serveur de prédilection.", projects: ["krown", "nightprint", "sidetown", "corpusai", "favikon"] },
        { name: "NestJS", icon: "nestjs", note: "APIs modulaires, en architecture hexagonale.", projects: ["krown", "corpusai"] },
        { name: "Express", icon: "express", note: "Services légers et streaming SSE.", projects: ["favikon"] },
        { name: "Prisma", icon: "prisma", note: "ORM typé pour PostgreSQL.", projects: ["corpusai"] },
        { name: "Drizzle", icon: "drizzle", note: "ORM au plus près du SQL, migrations versionnées.", projects: ["sidetown"] },
        { name: "BullMQ", icon: "queue", note: "Files d'attente et jobs asynchrones.", projects: ["corpusai"] },
        { name: "Stripe", icon: "stripe", note: "Checkout, webhooks idempotents, remboursements.", projects: ["sidetown", "corpusai"] },
        { name: "Socket.IO", icon: "socketdotio", note: "WebSocket bidirectionnel pour le live.", projects: ["favikon"] },
        { name: "SSE", icon: "sse", note: "Streaming des réponses IA, token par token.", projects: ["krown", "corpusai", "favikon"] },
      ],
    },
    {
      id: "mobile",
      title: "Mobile",
      blurb: "Natif iOS, du widget au paiement.",
      items: [
        { name: "SwiftUI", icon: "swift", note: "Apps iOS natives, MVVM avec @Observable.", projects: ["krown"] },
        { name: "WidgetKit", icon: "apple", note: "Widgets, Live Activities et contrôles.", projects: ["krown"] },
        { name: "StoreKit 2", icon: "appstore", note: "Abonnements, essai gratuit et restauration des achats.", projects: ["krown"] },
        { name: "Flutter", icon: "flutter", note: "Applications multiplateformes.", projects: [] },
      ],
    },
    {
      id: "data",
      title: "Données",
      blurb: "Le bon stockage pour chaque usage.",
      items: [
        { name: "PostgreSQL", icon: "postgresql", note: "Relationnel, avec les règles métier en contraintes.", projects: ["sidetown", "corpusai"] },
        { name: "MongoDB", icon: "mongodb", note: "Documents à grande échelle.", projects: ["krown", "favikon"] },
        { name: "Redis", icon: "redis", note: "Cache, files et pub/sub.", projects: ["corpusai", "favikon"] },
        { name: "Elasticsearch", icon: "elasticsearch", note: "Recherche et classements à grande échelle.", projects: ["krown", "favikon"] },
      ],
    },
    {
      id: "languages",
      title: "Langages",
      blurb: "TypeScript partout, le reste quand il le faut.",
      items: [
        { name: "TypeScript", icon: "typescript", note: "Mon langage principal, du front au back.", projects: ["krown", "nightprint", "sidetown", "corpusai", "favikon"] },
        { name: "Swift", icon: "swift", note: "iOS natif.", projects: ["krown"] },
        { name: "Python", icon: "python", note: "Scripts de modélisation 3D procédurale.", projects: ["sidetown"] },
        { name: "C# / .NET", icon: "dotnet", note: "Backend en environnement entreprise.", projects: [] },
        { name: "PHP", icon: "php", note: "Laravel et CodeIgniter.", projects: [] },
        { name: "Dart", icon: "dart", note: "Mobile avec Flutter.", projects: [] },
      ],
    },
    {
      id: "quality",
      title: "Qualité",
      blurb: "Des règles imposées par les outils.",
      items: [
        { name: "Vitest", icon: "vitest", note: "Tests unitaires rapides, y compris sur une vraie base.", projects: ["nightprint", "sidetown"] },
        { name: "Jest", icon: "jest", note: "Tests de use-cases sur des fakes en mémoire.", projects: ["krown"] },
        { name: "Playwright", icon: "playwright", note: "Tests E2E et captures image par image.", projects: ["nightprint", "corpusai"] },
        { name: "Biome", icon: "biome", note: "Lint et format en un seul outil.", projects: ["nightprint", "sidetown"] },
        { name: "Snapshots iOS", icon: "snapshot", note: "Chaque composant SwiftUI figé en image de référence.", projects: ["krown"] },
        { name: "Accessibilité", icon: "a11y", note: "Clavier, contrastes testés, reduced motion.", projects: ["nightprint", "sidetown"] },
        { name: "SEO technique", icon: "googlesearchconsole", note: "Metadata, schema.org, sitemap et Search Console.", projects: [] },
      ],
    },
    {
      id: "devops",
      title: "DevOps & Infra",
      blurb: "Du commit à la prod, sans étape manuelle.",
      items: [
        { name: "Git", icon: "git", note: "Commits atomiques et règles de branches.", projects: ["krown", "nightprint", "sidetown", "corpusai", "favikon"] },
        { name: "GitHub Actions", icon: "githubactions", note: "CI/CD, déploiement et smoke tests.", projects: ["nightprint", "sidetown"] },
        { name: "Docker", icon: "docker", note: "Images multi-stage, conteneurs durcis.", projects: ["nightprint", "sidetown", "corpusai"] },
        { name: "Turborepo / pnpm", icon: "turborepo", note: "Monorepos rapides.", projects: ["krown", "nightprint", "corpusai"] },
        { name: "Caddy", icon: "caddy", note: "VPS auto-hébergé, HTTPS automatique.", projects: ["nightprint", "sidetown"] },
        { name: "Railway", icon: "railway", note: "Déploiement d'API et de workers.", projects: ["corpusai"] },
        { name: "PostHog", icon: "posthog", note: "Analytics produit, côté serveur.", projects: ["sidetown", "corpusai"] },
      ],
    },
  ],
};

// ============================================================================
// SERVICES (page de prestations freelance)
// ============================================================================

const services = {
  label: "Services",
  title: "Prestations de développement freelance",
  description: `Développeur full stack freelance à Paris, ${person.name} accompagne startups, PME et agences : applications web SaaS, intégration IA (RAG, LLM), sites vitrines optimisés SEO et systèmes temps réel.`,
  intro:
    "Je conçois et développe des produits web sur mesure, du site vitrine à la plateforme SaaS complète. Voici comment je peux vous aider : chaque projet démarre par un échange gratuit pour cadrer vos besoins.",
  // ⚠️ Fourchettes indicatives à valider/ajuster selon tes tarifs réels.
  items: [
    {
      title: "Application web & SaaS full stack",
      description:
        "Conception et développement d'applications web complètes : interfaces React / Next.js, back-end Node.js / NestJS, base de données, authentification, paiement (Stripe). De l'architecture au déploiement.",
      price: "À partir de 6 000 €",
      tags: ["React", "Next.js", "NestJS", "PostgreSQL", "Stripe"],
    },
    {
      title: "Intégration IA, RAG & agents LLM",
      description:
        "Intégration de l'IA dans vos produits : pipelines RAG (parsing, chunking, embeddings, reranking), assistants conversationnels, systèmes multi-agents (LangChain / LangGraph), recherche sémantique et streaming token-par-token.",
      price: "À partir de 5 000 €",
      tags: ["RAG", "LLM", "LangGraph", "Qdrant", "OpenAI"],
    },
    {
      title: "Site vitrine performant & SEO",
      description:
        "Sites vitrines modernes, rapides et optimisés pour le référencement local : design responsive, intégration de prise de rendez-vous, données structurées schema.org et bonnes pratiques SEO techniques.",
      price: "À partir de 1 500 €",
      tags: ["Next.js", "SEO", "Responsive", "Performance"],
    },
    {
      title: "Temps réel & architecture",
      description:
        "Systèmes temps réel (WebSocket, SSE, Redis), architectures monorepo (Turborepo), refonte technique et conseil. Pour fiabiliser et faire passer à l'échelle vos applications existantes.",
      price: "Sur devis",
      tags: ["WebSocket", "SSE", "Redis", "Turborepo"],
    },
  ],
  availability:
    "Disponible pour des missions ponctuelles et au forfait, en parallèle d'une activité salariée. Idéal pour un projet cadré, une fonctionnalité à développer ou une intégration IA, avec un interlocuteur unique, fiable et réactif.",
  process: {
    title: "Comment je travaille",
    steps: [
      {
        title: "Échange & cadrage",
        description:
          "Un premier appel gratuit pour comprendre votre besoin, votre contexte et vos contraintes. Je vous oriente même si ce n'est pas pour moi.",
      },
      {
        title: "Devis & planning",
        description:
          "Une proposition claire : périmètre, délais et budget. Pas de surprise, vous validez avant qu'on démarre.",
      },
      {
        title: "Développement",
        description:
          "Je développe par itérations avec des points réguliers. Vous suivez l'avancement et ajustez en cours de route.",
      },
      {
        title: "Livraison & suivi",
        description:
          "Mise en production, documentation et passation. Je reste disponible pour les évolutions et le support.",
      },
    ],
  },
  cta: {
    title: "Un projet en tête ?",
    description:
      "Discutons-en. Le premier échange est gratuit et sans engagement : je vous aide à cadrer votre besoin et à estimer le projet.",
  },
};

// ============================================================================
// CONTACT
// ============================================================================

const contact = {
  label: "Contact",
  title: "Me contacter",
  description: `Contactez ${person.name}, ${person.role} basé à Paris, pour une mission freelance, une collaboration ou toute question.`,
  intro:
    "Une mission freelance, un projet web ou une simple question ? Le plus simple est de planifier un appel ou de m'écrire directement : je réponds rapidement.",
  calendar: {
    display: true,
    link: "https://cal.com/ewenlq/30min",
  },
};

// ============================================================================
// EXPORTS
// ============================================================================

export { person, social, newsletter, home, about, blog, work, uses, services, contact, keywords };
