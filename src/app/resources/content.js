const person = {
  firstName: "Ewen",
  lastName: "Le Quéré",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-stack développeur",
  avatar: "/images/avatar.jpg",
  location: "Europe/Paris",
  languages: ["French", "English"],
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
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
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "ewen.le-quere@epitech.eu",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full-stack développeur</>,
  subline: (
    <>
      Je suis Ewen, développeur web fullstack, diplômé d’Epitech, avec 3 ans d’expérience en entreprise et une envie constante d’explorer de nouveaux défis.
    </>
  ),
};

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
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>
          Développeur web fullstack, diplômé de la 5ᵉ année à l’école Epitech, je recherche une opportunité 
          professionnelle à partir de <strong>novembre 2025</strong>. Fort de près de <strong>3 ans d’expérience</strong> en entreprise, 
          dont deux stages de 6 mois lors de ma dernière année, j’ai eu l’occasion de contribuer à des projets 
          variés et exigeants qui m’ont permis de consolider mes acquis.
        </p>
        <p>
          J’ai développé des compétences solides en <strong>front-end</strong>, <strong>back-end</strong> et <strong>APIs</strong>. 
          Passionné par les nouvelles technologies et motivé à relever de nouveaux défis, 
          je suis prêt à mettre mon expertise et mon savoir-faire au service de votre équipe.
        </p>
      </>
    ),
  },

  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Hercules Thrustmaster",
        timeframe: "2023 - Present",
        role: "Fullstack développeur",
        achievements: [
          <>
            Développement complet d’un <strong>système d’affiliation</strong>, commencé lors de mon stage puis poursuivi en mission freelance pour Hercules Thrustmaster. 
            Projet stratégique pour le département marketing, en production et évoluant grâce à de nouvelles fonctionnalités et à la maintenance continue. 
          </>,
          <>
            Collaboration interservices (<em>marketing, légal, comptabilité, esport</em>) et intégration des retours utilisateurs dans une démarche <strong>agile</strong> (Kanban, sprints).
          </>,
          <>
            <strong>Hard skills :</strong> PHP/Laravel, CodeIgniter 4, MySQL, GitLab
          </>,
          <>
            <strong>Soft skills :</strong> autonomie, rigueur, communication inter-équipes, gestion de projet
          </>,
        ],
        images: [],
      },
      {
        company: "Coexya",
        timeframe: "2024 - 2025",
        role: "Intern - Fullstack développeur",
        achievements: [
          <>
            Participation à l’implémentation d’un logiciel SaaS (Software as a Service) de comparaison de marques déposées et dessins et modèles industriels.
          </>,
          <>
            <strong>Hard skills :</strong> TypeScript, Angular, .NET, C#, MySQL
          </>,
        ],
        images: [],
      },
      {
        company: "Moment",
        timeframe: "2025",
        role: "Intern – Fullstack développeur",
        achievements: [
          <>
            Participation au développement de la plateforme <strong>Mood</strong>: 
            évolutions front-end avec <strong>Next.js</strong> et <strong>TypeScript</strong>, intégration de demandes spécifiques 
            et contribution au Design System pour améliorer la cohérence des interfaces.
          </>,
          <>
            Implémentation de l’API <strong>Universal Music France</strong> dans le projet interne Colombo : 
            génération d’un client avec <strong>TypeSpec</strong>, intégration dans un back-end <strong>NestJS</strong> 
            <br/>et automatisation de la gestion des playlists.
          </>,
          <>
            <strong>Hard skills :</strong> TypeScript, React, Next.js, NestJS, TypeSpec, PostgreSQL
          </>,
          <>
            <strong>Soft skills :</strong> Adaptabilité, collaboration en équipe, autonomie, communication 
            avec designers, chefs de projet et équipe contenu.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Epitech",
        description: <>Promotion 2025 | Certification Professionnelle RNCP 7</>,
      },
      {
        name: "Epitech Berlin",
        description: <>Promotion 2024 | Certification développement jeu vidéo</>,
      },
    ],
  },

  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend",
        description: (
          <>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>Angular</li>
            </ul>
          </>
        ),
        images: [],
      },
      {
        title: "Backend",
        description: (
          <>
            <ul>
              <li>NestJS</li>
              <li>PHP/Laravel</li>
              <li>CodeIgniter 4</li>
              <li>.NET</li>
              <li>C#</li>
            </ul>
          </>
        ),
        images: [],
      },
      {
        title: "Database",
        description: (
          <>
            <ul>
              <li>MySQL</li>
              <li>PostgreSQL</li>
            </ul>
          </>
        ),
        images: [],
      },
      {
        title: "Design",
        description: (
          <>
            <ul>
              <li>Figma</li>
              <li>Zeplin</li>
            </ul>
          </>
        ),
        images: [],
      },
      {
        title: "Outils, API & DevOps",
        description: (
          <>
            <ul>
              <li>Git (GitHub, GitLab)</li>
              <li>Typespec</li>
              <li>Docker</li>
              <li>CI/CD</li>
            </ul>
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
