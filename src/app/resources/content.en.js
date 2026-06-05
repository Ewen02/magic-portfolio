// ============================================================================
// PERSONAL INFO
// ============================================================================

const person = {
  firstName: "Ewen",
  lastName: "Le Quéré",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
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
  title: `${person.name} — Freelance Full Stack Developer in Paris`,
  description: `Freelance full stack developer in Paris, Epitech graduate. Available for your web projects: React, Next.js, Node.js, NestJS and applied AI (RAG, LLM, agents). Let's discuss your project.`,
  headline: <>Ewen Le Quéré, Freelance Full Stack Developer</>,
  subline: (
    <>
      I'm Ewen, a Full Stack Developer and Epitech graduate, with 3 years of experience
      in companies and on side projects. Passionate about modern architectures, real-time systems and applied AI.
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
  description: `${person.name}, ${person.role} based in Paris. 3 years of experience in SaaS, real-time and applied AI.`,

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
          A Full Stack Developer and Epitech graduate (Master's level), I have <strong>3 years of experience</strong> in
          companies and as a freelancer across a wide range of projects: B2B SaaS, marketing platforms, real-time systems and applied AI.
        </p>
        <p>
          My expertise spans the <strong>frontend</strong> (React, Next.js), the <strong>backend</strong> (Node.js,
          NestJS) and the integration of <strong>AI systems</strong> (LLMs, RAG pipelines, agents, semantic search).
        </p>
        <p>
          I also build <strong>complete SaaS products</strong> as side projects, from monorepo architecture to deployment.
        </p>
        <p>
          Currently a <strong>full-time developer at Favikon</strong> and <strong>open to freelance projects</strong> — feel free to reach out.
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
        role: "Full Stack Developer",
        achievements: [
          <>
            Building features on an AI-powered <strong>B2B influencer marketing SaaS</strong> platform,
            at scale: <strong>210K+ users</strong>, <strong>11.5M+ creators</strong> and <strong>30M+ indexed posts</strong>.
          </>,
          <>
            <strong>Frontend:</strong> Modular Next.js/React architecture, state management (React Query, Redux),
            real-time (Socket.io, SSE), drag & drop widgets, token-by-token streaming.
          </>,
          <>
            <strong>Backend:</strong> Business-critical modules (campaigns, discovery, messaging), specialized
            databases (MongoDB, Elasticsearch, Qdrant, Redis), real-time pipelines.
          </>,
          <>
            <strong>AI:</strong> Multi-agent systems (LangChain/LangGraph), AI streaming, semantic search,
            automated message generation and recommendations.
          </>,
          <>
            <strong>Mobile:</strong> Development of a <strong>native iOS app in Swift</strong>.
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
          "On the frontend: React, Next.js and TypeScript. On the backend: Node.js, NestJS and Express. I also develop in Swift (iOS app at Favikon). I work on applied AI (RAG pipelines, LLMs, multi-agent systems with LangChain/LangGraph), real-time architectures (WebSocket, SSE, Redis), as well as technical SEO, accessibility and testing (Jest).",
      },
      {
        question: "Do you handle a website's SEO and performance?",
        answer:
          "Yes. I implement technical SEO end to end: per-page metadata and Open Graph, schema.org structured data for rich snippets, sitemap and robots, monitoring through Search Console, plus Core Web Vitals and accessibility optimization. This is exactly what I did on this portfolio and on client websites.",
      },
      {
        question: "Do you have experience with AI and LLMs?",
        answer:
          "Yes. I have built complete RAG pipelines (parsing, chunking, embeddings, reranking), multi-agent systems and token-by-token AI streaming in production, notably on B2B SaaS platforms.",
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
        title: "AI & Agents",
        description: (
          <>
            LangChain / LangGraph, RAG pipeline (chunking, embeddings, reranking), Multi-agent systems, AI streaming (SSE), Qdrant / Semantic search
          </>
        ),
        images: [],
      },
      {
        title: "Databases",
        description: (
          <>
            MongoDB, PostgreSQL / MySQL, Elasticsearch, Qdrant (vector DB), Redis
          </>
        ),
        images: [],
      },
      {
        title: "SEO, Testing & Quality",
        description: (
          <>
            Technical SEO (metadata, sitemap, schema.org / rich snippets, Search Console), Accessibility (a11y), Core Web Vitals, Unit & integration testing (Jest)
          </>
        ),
        images: [],
      },
      {
        title: "DevOps & Tools",
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
  description: `The technologies, languages and tools ${person.name} uses every day: frontend, backend, AI, databases and DevOps.`,
  intro:
    "Here are the tools and technologies I use every day to build modern, performant and maintainable web products — from the frontend to AI and infrastructure.",
  categories: [
    {
      title: "Languages",
      items: [
        { name: "TypeScript", note: "My main language, both frontend and backend." },
        { name: "JavaScript", note: "For the Node.js runtime and the web." },
        { name: "Swift", note: "Native iOS app at Favikon." },
        { name: "Dart", note: "Mobile development with Flutter." },
        { name: "C# / .NET", note: "Backend in enterprise environments." },
        { name: "PHP", note: "Laravel and CodeIgniter on legacy projects." },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "React", note: "The foundation of all my interfaces." },
        { name: "Next.js", note: "App Router, SSR/SSG, streaming — my favorite framework." },
        { name: "Tailwind CSS", note: "To style fast and stay consistent." },
        { name: "React Query", note: "Server cache, invalidation and optimistic updates." },
        { name: "Redux Toolkit", note: "Global state when it's justified." },
        { name: "Framer Motion", note: "Smooth animations and interactions." },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", note: "My go-to server runtime." },
        { name: "NestJS", note: "Modular, typed architecture for APIs." },
        { name: "Express", note: "For lightweight services and SSE streaming." },
        { name: "Prisma", note: "Typed ORM for PostgreSQL." },
        { name: "BullMQ", note: "Queues and asynchronous jobs." },
      ],
    },
    {
      title: "AI & Data",
      items: [
        { name: "LangChain / LangGraph", note: "Agent orchestration and LLM workflows." },
        { name: "Qdrant", note: "Vector database for semantic search." },
        { name: "OpenAI", note: "Embeddings and generation." },
        { name: "Redis", note: "Cache, real-time state and pub/sub." },
        { name: "PostgreSQL / MongoDB", note: "Relational and document databases." },
        { name: "Elasticsearch", note: "Full-text search at scale." },
      ],
    },
    {
      title: "Real-time",
      items: [
        { name: "Socket.IO", note: "Bidirectional WebSocket for rooms and live features." },
        { name: "Server-Sent Events", note: "Unidirectional streaming for AI responses." },
      ],
    },
    {
      title: "SEO & Quality",
      items: [
        { name: "Metadata & Open Graph", note: "Per-page title/description tags and social sharing." },
        { name: "Schema.org", note: "Structured data for rich snippets (Person, FAQ, Review)." },
        { name: "Sitemap & robots", note: "Controlled indexing and clean crawling." },
        { name: "Search Console", note: "Monitoring indexing and search performance." },
        { name: "Accessibility (a11y)", note: "Contrast, heading hierarchy, keyboard navigation." },
        { name: "Jest", note: "Unit and integration testing." },
      ],
    },
    {
      title: "DevOps & Tools",
      items: [
        { name: "Git", note: "GitHub and GitLab every day." },
        { name: "Docker", note: "Containerization and reproducible environments." },
        { name: "Turborepo / pnpm", note: "Performant monorepos." },
        { name: "Vercel / Railway", note: "Frontend and backend deployment." },
        { name: "GitHub Actions", note: "Automated CI/CD." },
        { name: "Figma", note: "Design and integration." },
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
    "I design and build custom web products, from marketing websites to complete SaaS platforms. Here's how I can help — every project starts with a free call to scope your needs.",
  // ⚠️ Indicative ranges — validate/adjust against your real rates.
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
    "A freelance project, a web project or just a question? The easiest is to schedule a call or write to me directly — I reply quickly.",
  calendar: {
    display: true,
    link: "https://cal.com/ewenlq/30min",
  },
};

// ============================================================================
// EXPORTS
// ============================================================================

export { person, social, newsletter, home, about, blog, work, uses, services, contact, keywords };
