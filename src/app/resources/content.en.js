// ============================================================================
// PERSONAL INFO
// ============================================================================

const person = {
  firstName: "Ewen",
  lastName: "Le Quéré",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Lead Full Stack & AI Developer",
  avatar: "/images/ewen-le-quere.jpg",
  email: "ewen.le-quere@epitech.eu",
  location: "Europe/Paris",
  languages: ["French", "English"],
};

// ============================================================================
// SEO KEYWORDS (used in the metadata of every page)
// ============================================================================

const keywords = [
  // Primary keyword and commercial variants (freelance + Paris)
  "freelance full stack developer Paris",
  "lead full stack developer",
  "lead AI developer",
  "freelance tech lead Paris",
  "freelance full stack developer",
  "freelance developer Paris",
  "freelance web developer Paris",
  "full stack developer Paris",
  "full stack developer",
  "freelance developer",
  "Ewen Le Quéré",
  // Tech
  "React developer",
  "Next.js developer",
  "Node.js developer",
  "NestJS developer",
  "TypeScript developer",
  "Swift developer",
  "iOS developer",
  // AI specialty (differentiation)
  "freelance AI developer",
  "AI developer Paris",
  "RAG",
  "LLM",
  "RAG pipeline",
  "semantic search",
  // Services & expertise
  "website creation",
  "technical SEO",
  "SaaS",
  "real time",
  "software engineer",
  "Epitech",
  "developer portfolio",
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
  title: `${person.name} | Lead Full Stack & AI Developer, freelance in Paris`,
  description: `Lead full stack & AI developer, freelance in Paris, Epitech graduate. Tech lead of an iOS app live on the App Store. React, Next.js, NestJS, Swift and AI in production (agents, MCP, RAG).`,
  headline: <>Ewen Le Quéré, Lead Full Stack & AI Developer</>,
  subline: (
    <>
      I'm Ewen, an Epitech graduate with 3 years of experience. I was the tech lead of Krown, an iOS app live on
      the App Store, and I build AI products in production, from architecture to deployment.
      <br />Currently a full-time developer at Favikon, <strong>open to freelance projects.</strong>
    </>
  ),
};

// ============================================================================
// ABOUT PAGE
// ============================================================================

const about = {
  label: "About",
  title: "About",
  description: `${person.name}, ${person.role} based in Paris. Tech lead of an iOS app live on the App Store, 3 years of experience in SaaS and applied AI.`,

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
          <strong>Lead Full Stack & AI Developer</strong> and Epitech graduate (Master's level), with <strong>3 years of
          experience</strong> in companies and as a freelancer. I own products end to end: architecture, development, release
          and team standards (CI, testing, release process).
        </p>
        <p>
          At Favikon, I was the <strong>tech lead of Krown</strong>, the B2C product: a native iOS app taken from an empty repo
          to the <strong>App Store</strong> in five and a half months, with a NestJS API, a Next.js web app and an AI coach
          powered by an MCP server.
        </p>
        <p>
          My expertise covers <strong>applied AI in production</strong> (LLM agents, MCP servers, RAG pipelines, semantic
          search, model evaluation), the <strong>frontend</strong> (React, Next.js), the <strong>backend</strong> (Node.js,
          NestJS) and <strong>mobile</strong> (Swift, SwiftUI).
        </p>
        <p>
          On the side, I launch my own products, such as <strong>Nightprint</strong> and <strong>Sidetown</strong>, from the
          monorepo to deployment on my own server.
        </p>
        <p>
          Currently a <strong>full-time developer at Favikon</strong> and <strong>open to freelance projects</strong>. Feel free to reach out.
        </p>
      </>
    ),
  },

  // --------------------------------------------------------------------------
  // WORK EXPERIENCE (reverse chronological order)
  // --------------------------------------------------------------------------
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Favikon",
        timeframe: "2025 - Present",
        role: "Lead Full Stack & AI Developer",
        achievements: [
          <>
            <strong>Tech lead of Krown</strong>, the B2C product: a <strong>native iOS app (SwiftUI)</strong> for content
            creators, from an empty repo to the <strong>App Store</strong> in five and a half months. Architecture laid down from
            the first commit: monorepo (SwiftUI, NestJS, Next.js, Kotlin) and a <strong>hexagonal NestJS API</strong> (ports and
            adapters, use-cases tested on in-memory fakes), then technical leadership of a team of 4 developers.
          </>,
          <>
            <strong>Engineering framework:</strong> 13 architecture guides, generated shared contracts (JSON Schema to Swift, TypeScript and Kotlin),
            promotion-based release process, branching rules enforced by hooks, <strong>~10,000 automated tests</strong>,
            App Store compliance and server-side StoreKit 2 billing.
          </>,
          <>
            <strong>AI:</strong> designed <strong>Koach</strong>, the app's AI agent: an LLM agent powered by an MCP server,
            evaluation of 13 models, red-teaming, cost and time limits enforced in code, answers streamed over SSE.
          </>,
          <>
            <strong>B2B SaaS platform</strong> for influencer marketing (<strong>210K+ users</strong>,{" "}
            <strong>11.5M+ creators</strong>, <strong>30M+ posts</strong>): Next.js/React frontend architecture, real-time
            (Socket.io, SSE), multi-agent systems (LangChain/LangGraph), backend modules (campaigns, discovery, messaging) on MongoDB, Elasticsearch, Qdrant and Redis.
          </>,
        ],
        images: [],
      },
      {
        company: "Side projects",
        timeframe: "2026",
        role: "Design, development and release",
        achievements: [
          <>
            <strong>Nightprint</strong> (nightprint.dev): software architecture drawn as interactive 3D machines (WebGPU,
            React Three Fiber), with an AI importer that draws a GitHub repository from its own code. Open source.
          </>,
          <>
            <strong>Sidetown</strong> (sidetown.dev): a developer's side projects rendered as an isometric city by a 3D to SVG
            engine written from scratch. Next.js 16, Drizzle, Stripe, launched in 11 days with real payments.
          </>,
          <>
            <strong>CorpusAI</strong>: document-based conversational AI SaaS, complete RAG pipeline (chunking, embeddings,
            hybrid reranking), SSE streaming, Stripe billing, Turborepo monorepo.
          </>,
        ],
        images: [],
      },
      {
        company: "Moment",
        timeframe: "April - October 2025",
        role: "Internship - Full Stack Developer",
        achievements: [
          <>
            Development of the <strong>Mood</strong> platform: frontend improvements (Next.js, TypeScript),
            contribution to the Design System to improve interface consistency.
          </>,
          <>
            Integration of the <strong>Universal Music France</strong> API: client generation with TypeSpec,
            NestJS backend integration, automation of playlist management.
          </>,
        ],
        images: [],
      },
      {
        company: "Coexya",
        timeframe: "2024 - 2025",
        role: "Internship - Full Stack Developer",
        achievements: [
          <>
            Implementation of a <strong>SaaS tool for comparing registered trademarks</strong> and industrial
            designs. Stack: TypeScript, Angular, .NET/C#, MySQL.
          </>,
        ],
        images: [],
      },
      {
        company: "Hercules Thrustmaster",
        timeframe: "2023 - 2025",
        role: "Full Stack Developer (Freelance)",
        achievements: [
          <>
            Design and development of a complete <strong>affiliate system</strong> for the marketing
            department. A strategic project in production with continuous improvements.
          </>,
          <>
            Cross-team collaboration (marketing, legal, accounting, esport) using
            <strong> agile</strong> methodology (Kanban, sprints). Stack: PHP/Laravel, CodeIgniter 4, MySQL.
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
    title: "Education",
    institutions: [
      {
        name: "Epitech Paris",
        description: <>Class of 2025 - Expert in Information Technology (RNCP 7, Master's level)</>,
      },
      {
        name: "Epitech Berlin",
        description: <>2024 - International semester & Video game development certification</>,
      },
    ],
  },

  // --------------------------------------------------------------------------
  // FAQ (also feeds the FAQPage schema for Google rich snippets)
  // --------------------------------------------------------------------------
  faq: {
    display: true,
    title: "Frequently asked questions",
    items: [
      {
        question: "Are you available for new opportunities?",
        answer:
          "I'm currently a full-time developer at Favikon. I remain open to freelance projects on the side. You can reach me by email or schedule a call directly from this page.",
      },
      {
        question: "Which technologies do you work with?",
        answer:
          "On the frontend: React, Next.js and TypeScript. On the backend: Node.js, NestJS and Express. On mobile: Swift and SwiftUI (tech lead of the Krown iOS app at Favikon). I work on applied AI (LLM agents, MCP servers, RAG pipelines, multi-agent systems with LangChain/LangGraph), real-time architectures (WebSocket, SSE, Redis), as well as technical SEO, accessibility and testing (Jest, Vitest, Playwright).",
      },
      {
        question: "Do you handle a website's SEO and performance?",
        answer:
          "Yes. I implement technical SEO end to end: per-page metadata and Open Graph, schema.org structured data for rich snippets, sitemap and robots, monitoring through Search Console, plus Core Web Vitals and accessibility optimization. This is exactly what I did on this portfolio and on client websites.",
      },
      {
        question: "Have you led a project as a tech lead?",
        answer:
          "Yes. At Favikon, I was the tech lead of Krown, the B2C product, from an empty repo to the App Store: monorepo architecture, coding standards, release process, CI, Apple submission and technical leadership of the other developers on the project.",
      },
      {
        question: "Do you have experience with AI and LLMs?",
        answer:
          "Yes, in production. I designed Koach, the AI agent of the Krown app, powered by an MCP server (evaluation of 13 models, red-teaming, guardrails in code, answers streamed over SSE). I also worked on multi-agent systems for Favikon's B2B SaaS platform, and built a complete RAG pipeline (parsing, chunking, embeddings, hybrid reranking) for CorpusAI.",
      },
      {
        question: "Do you work as a freelancer?",
        answer:
          "Yes, I take on freelance projects. For example, I built a complete affiliate system from scratch for Hercules Thrustmaster, in production since 2023.",
      },
      {
        question: "Where are you based?",
        answer:
          "I'm based in Paris, France. I work in French and English, both on site and remotely.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // TESTIMONIALS (also feeds the Review schema for Google rich snippets)
  // --------------------------------------------------------------------------
  testimonials: {
    display: true,
    title: "Recommendations",
    items: [
      {
        quote:
          "Ewen designed and developed our affiliate system from start to finish. Beyond his technical skills, he understood our marketing goals and was able to work with every department (legal, accounting, esport). The project has been in production since 2023 and keeps evolving: reliable, autonomous and full of ideas.",
        author: "Marketing Team",
        role: "Hercules Thrustmaster",
        link: "https://www.thrustmaster.com/fr-fr/affiliate/",
      },
      {
        quote:
          "Ewen built the website for our dental practice. Attentive, responsive and professional, he delivered a modern, fast and clear website that perfectly reflects our practice. Online appointment booking works flawlessly, and our patients regularly give us positive feedback about the website.",
        author: "Dental practice",
        role: "Website, Bures-sur-Yvette",
        link: "https://cabinetdentairedesboeuf.fr/",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // TECHNICAL SKILLS
  // --------------------------------------------------------------------------
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Technical leadership & Architecture",
        description: (
          <>
            Hexagonal architecture, polyglot monorepos (Turborepo, pnpm), generated shared contracts (JSON Schema, quicktype), release process and branching rules, CI/CD, code review, App Store compliance
          </>
        ),
        images: [],
      },
      {
        title: "AI & Agents",
        description: (
          <>
            LLM agents (Claude, OpenRouter), MCP servers, LangChain / LangGraph, RAG pipelines (chunking, embeddings, reranking), model evaluation and red-teaming, AI streaming (SSE), Qdrant / semantic search
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
        title: "Databases",
        description: (
          <>
            MongoDB, PostgreSQL (Neon) / MySQL, Elasticsearch, Qdrant (vector DB), Redis
          </>
        ),
        images: [],
      },
      {
        title: "SEO, Testing & Quality",
        description: (
          <>
            Unit and integration testing (Jest, Vitest), E2E testing (Playwright), iOS snapshot tests, technical SEO (metadata, sitemap, schema.org, Search Console), accessibility, Core Web Vitals
          </>
        ),
        images: [],
      },
      {
        title: "DevOps & Tools",
        description: (
          <>
            Git (GitHub, GitLab, Bitbucket), Docker, GitHub Actions, self-hosted VPS (Caddy, Docker Compose), TypeSpec
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
  title: "Tech articles: AI, real-time & architecture",
  description: `Technical articles by ${person.name}, freelance full stack developer in Paris: RAG pipelines, LLMs, real-time systems (WebSocket, SSE) and modern architectures.`,
};

// ============================================================================
// WORK / PROJECTS
// ============================================================================

const work = {
  label: "Work",
  title: "My projects",
  description: `Full stack development projects by ${person.name}: SaaS, AI, real-time and modern architectures.`,
};

// ============================================================================
// USES (stack & tools)
// ============================================================================

const uses = {
  label: "Uses",
  title: "Stack & tools",
  description: `The technologies ${person.name} uses in production, linked to the projects that prove them: frontend, mobile, backend, AI, data, quality and DevOps.`,
  intro:
    "The technologies I use in production, as branches around me: the client side on the left, the server side on the right, AI at the top and quality at the bottom. Each tool is linked to the projects where I use it.",
  labels: {
    hint: "Hover a tool or a project to see the link.",
    usedIn: "Used in",
    notUsed: "Outside the projects shown here.",
    tools: "tools",
    proofTitle: "Where I use them",
    proofIntro: "Hover a project: only the branches and tools it relies on stay lit.",
    detailsTitle: "Every tool, in detail",
  },
  // Projects that prove the tools (slugs of the /work pages).
  projects: [
    { slug: "krown", name: "Krown", tagline: "B2C iOS app, tech lead", image: "/images/projects/krown/hero-en.jpg" },
    { slug: "nightprint", name: "Nightprint", tagline: "Architecture as 3D machines", image: "/images/projects/nightprint/cover-01.jpg" },
    { slug: "sidetown", name: "Sidetown", tagline: "Side projects as a city", image: "/images/projects/sidetown/cover-01.jpg" },
    { slug: "corpusai", name: "CorpusAI", tagline: "Document-based AI SaaS", image: "/images/projects/corpusai/cover-01.png" },
    { slug: "favikon", name: "Favikon", tagline: "B2B influencer SaaS", image: "/images/projects/favikon/cover-01.png" },
  ],
  categories: [
    {
      id: "frontend",
      title: "Frontend",
      blurb: "Fast, typed and accessible interfaces.",
      items: [
        { name: "React", icon: "react", note: "The base of all my interfaces.", projects: ["krown", "nightprint", "sidetown", "corpusai", "favikon"] },
        { name: "Next.js", icon: "nextdotjs", note: "App Router, SSR and streaming: my go-to framework.", projects: ["krown", "nightprint", "sidetown", "corpusai", "favikon"] },
        { name: "Tailwind CSS", icon: "tailwindcss", note: "Styling fast while staying consistent, from design tokens.", projects: ["krown", "nightprint", "sidetown", "corpusai"] },
        { name: "three.js / R3F", icon: "threedotjs", note: "3D scenes on WebGPU, with a WebGL2 fallback.", projects: ["nightprint"] },
        { name: "React Query", icon: "reactquery", note: "Server cache, invalidation and optimistic updates.", projects: ["corpusai", "favikon"] },
        { name: "Redux Toolkit", icon: "redux", note: "Global state when it is justified.", projects: ["favikon"] },
        { name: "Figma", icon: "figma", note: "Mockups and Atomic Design systems.", projects: ["krown"] },
      ],
    },
    {
      id: "ai",
      title: "AI & Agents",
      blurb: "Agents in production, tooled and evaluated.",
      items: [
        { name: "MCP", icon: "mcp", note: "Tool servers for LLM agents, wired to the use-cases.", projects: ["krown"] },
        { name: "Claude", icon: "anthropic", note: "Streaming generation, live reasoning summary, prompt caching.", projects: ["nightprint"] },
        { name: "OpenAI", icon: "openai", note: "Embeddings and generation.", projects: ["corpusai"] },
        { name: "LangChain / LangGraph", icon: "langchain", note: "Agent orchestration and LLM workflows.", projects: ["favikon"] },
        { name: "RAG", icon: "rag", note: "Chunking, embeddings and hybrid reranking.", projects: ["corpusai"] },
        { name: "Qdrant", icon: "vector", note: "Vector database for semantic search.", projects: ["corpusai", "favikon"] },
        { name: "Evals & red-teaming", icon: "evals", note: "Comparing models and attacking the agent before release.", projects: ["krown"] },
      ],
    },
    {
      id: "backend",
      title: "Backend & real-time",
      blurb: "Modular APIs, async jobs and streaming.",
      items: [
        { name: "Node.js", icon: "nodedotjs", note: "My server runtime of choice.", projects: ["krown", "nightprint", "sidetown", "corpusai", "favikon"] },
        { name: "NestJS", icon: "nestjs", note: "Modular APIs, in hexagonal architecture.", projects: ["krown", "corpusai"] },
        { name: "Express", icon: "express", note: "Lightweight services and SSE streaming.", projects: ["favikon"] },
        { name: "Prisma", icon: "prisma", note: "Typed ORM for PostgreSQL.", projects: ["corpusai"] },
        { name: "Drizzle", icon: "drizzle", note: "SQL-close ORM, versioned migrations.", projects: ["sidetown"] },
        { name: "BullMQ", icon: "queue", note: "Queues and async jobs.", projects: ["corpusai"] },
        { name: "Stripe", icon: "stripe", note: "Checkout, idempotent webhooks, refunds.", projects: ["sidetown", "corpusai"] },
        { name: "Socket.IO", icon: "socketdotio", note: "Two-way WebSocket for live features.", projects: ["favikon"] },
        { name: "SSE", icon: "sse", note: "Streaming AI answers, token by token.", projects: ["krown", "corpusai", "favikon"] },
      ],
    },
    {
      id: "mobile",
      title: "Mobile",
      blurb: "Native iOS, from widgets to payments.",
      items: [
        { name: "SwiftUI", icon: "swift", note: "Native iOS apps, MVVM with @Observable.", projects: ["krown"] },
        { name: "WidgetKit", icon: "apple", note: "Widgets, Live Activities and controls.", projects: ["krown"] },
        { name: "StoreKit 2", icon: "appstore", note: "Subscriptions, free trial and purchase restore.", projects: ["krown"] },
        { name: "Flutter", icon: "flutter", note: "Cross-platform apps.", projects: [] },
      ],
    },
    {
      id: "data",
      title: "Data",
      blurb: "The right storage for each job.",
      items: [
        { name: "PostgreSQL", icon: "postgresql", note: "Relational, with business rules as constraints.", projects: ["sidetown", "corpusai"] },
        { name: "MongoDB", icon: "mongodb", note: "Documents at scale.", projects: ["krown", "favikon"] },
        { name: "Redis", icon: "redis", note: "Cache, queues and pub/sub.", projects: ["corpusai", "favikon"] },
        { name: "Elasticsearch", icon: "elasticsearch", note: "Search and rankings at scale.", projects: ["krown", "favikon"] },
      ],
    },
    {
      id: "languages",
      title: "Languages",
      blurb: "TypeScript everywhere, the rest when needed.",
      items: [
        { name: "TypeScript", icon: "typescript", note: "My main language, front to back.", projects: ["krown", "nightprint", "sidetown", "corpusai", "favikon"] },
        { name: "Swift", icon: "swift", note: "Native iOS.", projects: ["krown"] },
        { name: "Python", icon: "python", note: "Procedural 3D modelling scripts.", projects: ["sidetown"] },
        { name: "C# / .NET", icon: "dotnet", note: "Backend in enterprise settings.", projects: [] },
        { name: "PHP", icon: "php", note: "Laravel and CodeIgniter.", projects: [] },
        { name: "Dart", icon: "dart", note: "Mobile with Flutter.", projects: [] },
      ],
    },
    {
      id: "quality",
      title: "Quality",
      blurb: "Rules enforced by tools.",
      items: [
        { name: "Vitest", icon: "vitest", note: "Fast unit tests, including against a real database.", projects: ["nightprint", "sidetown"] },
        { name: "Jest", icon: "jest", note: "Use-case tests on in-memory fakes.", projects: ["krown"] },
        { name: "Playwright", icon: "playwright", note: "E2E tests and frame-by-frame captures.", projects: ["nightprint", "corpusai"] },
        { name: "Biome", icon: "biome", note: "Lint and format in one tool.", projects: ["nightprint", "sidetown"] },
        { name: "iOS snapshots", icon: "snapshot", note: "Every SwiftUI component pinned as a reference image.", projects: ["krown"] },
        { name: "Accessibility", icon: "a11y", note: "Keyboard, tested contrast, reduced motion.", projects: ["nightprint", "sidetown"] },
        { name: "Technical SEO", icon: "googlesearchconsole", note: "Metadata, schema.org, sitemap and Search Console.", projects: [] },
      ],
    },
    {
      id: "devops",
      title: "DevOps & Infra",
      blurb: "From commit to production, no manual step.",
      items: [
        { name: "Git", icon: "git", note: "Atomic commits and branching rules.", projects: ["krown", "nightprint", "sidetown", "corpusai", "favikon"] },
        { name: "GitHub Actions", icon: "githubactions", note: "CI/CD, deployment and smoke tests.", projects: ["nightprint", "sidetown"] },
        { name: "Docker", icon: "docker", note: "Multi-stage images, hardened containers.", projects: ["nightprint", "sidetown", "corpusai"] },
        { name: "Turborepo / pnpm", icon: "turborepo", note: "Fast monorepos.", projects: ["krown", "nightprint", "corpusai"] },
        { name: "Caddy", icon: "caddy", note: "Self-hosted VPS, automatic HTTPS.", projects: ["nightprint", "sidetown"] },
        { name: "Railway", icon: "railway", note: "API and worker deployment.", projects: ["corpusai"] },
        { name: "PostHog", icon: "posthog", note: "Product analytics, server side.", projects: ["sidetown", "corpusai"] },
      ],
    },
  ],
};

// ============================================================================
// SERVICES (freelance services page)
// ============================================================================

const services = {
  label: "Services",
  title: "Freelance development services",
  description: `Freelance full stack developer in Paris, ${person.name} helps startups, SMEs and agencies: SaaS web apps, AI integration (RAG, LLM), SEO-optimized marketing websites and real-time systems.`,
  intro:
    "I design and build custom web products, from marketing websites to complete SaaS platforms. Here's how I can help: every project starts with a free call to scope your needs.",
  // ⚠️ Indicative ranges: validate/adjust against your real rates.
  items: [
    {
      title: "Web app & full stack SaaS",
      description:
        "Design and development of complete web applications: React / Next.js interfaces, Node.js / NestJS back-end, database, authentication, payments (Stripe). From architecture to deployment.",
      price: "From €6,000",
      tags: ["React", "Next.js", "NestJS", "PostgreSQL", "Stripe"],
    },
    {
      title: "AI integration, RAG & LLM agents",
      description:
        "Bringing AI into your products: RAG pipelines (parsing, chunking, embeddings, reranking), conversational assistants, multi-agent systems (LangChain / LangGraph), semantic search and token-by-token streaming.",
      price: "From €5,000",
      tags: ["RAG", "LLM", "LangGraph", "Qdrant", "OpenAI"],
    },
    {
      title: "Fast, SEO-friendly marketing website",
      description:
        "Modern, fast websites optimized for local search: responsive design, booking integration, schema.org structured data and technical SEO best practices.",
      price: "From €1,500",
      tags: ["Next.js", "SEO", "Responsive", "Performance"],
    },
    {
      title: "Real-time & architecture",
      description:
        "Real-time systems (WebSocket, SSE, Redis), monorepo architectures (Turborepo), technical overhaul and consulting. To harden and scale your existing applications.",
      price: "On request",
      tags: ["WebSocket", "SSE", "Redis", "Turborepo"],
    },
  ],
  availability:
    "Available for one-off and fixed-price projects, alongside a salaried position. Ideal for a well-scoped project, a feature to build or an AI integration, with a single, reliable and responsive point of contact.",
  process: {
    title: "How I work",
    steps: [
      {
        title: "Discovery & scoping",
        description:
          "A free first call to understand your need, context and constraints. I'll point you in the right direction even if it's not a fit for me.",
      },
      {
        title: "Quote & timeline",
        description:
          "A clear proposal: scope, timeline and budget. No surprises: you approve before we start.",
      },
      {
        title: "Development",
        description:
          "I build in iterations with regular check-ins. You follow progress and adjust along the way.",
      },
      {
        title: "Delivery & support",
        description:
          "Deployment, documentation and handover. I stay available for future iterations and support.",
      },
    ],
  },
  cta: {
    title: "Got a project in mind?",
    description:
      "Let's talk. The first call is free and no-strings: I'll help you scope your needs and estimate the project.",
  },
};

// ============================================================================
// CONTACT
// ============================================================================

const contact = {
  label: "Contact",
  title: "Get in touch",
  description: `Contact ${person.name}, ${person.role} based in Paris, for a freelance project, a collaboration or any question.`,
  intro:
    "A freelance project, a web project or just a question? The easiest is to schedule a call or write to me directly: I reply quickly.",
  calendar: {
    display: true,
    link: "https://cal.com/ewenlq/30min",
  },
};

// ============================================================================
// EXPORTS
// ============================================================================

export { person, social, newsletter, home, about, blog, work, uses, services, contact, keywords };
