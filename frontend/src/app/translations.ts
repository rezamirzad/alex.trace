export type Language = "en" | "fr";

export interface Project {
  title: string;
  role: string;
  description: string;
  tech: string[];
  challenge: string;
  solution: string;
  outcome: string;
  link: string;
}

export interface TranslationContent {
  nav: {
    profile: string;
    expertise: string;
    projects: string;
    contact: string;
  };
  hero: {
    name: string;
    role: string;
    bio: string;
    location: string;
    statusLabel: string;
    quote: string;
    cvFilename: string;
  };
  expertise: {
    title: string;
    categories: { name: string; skills: string[] }[];
  };
  projects: {
    title: string;
    list: Project[];
  };
  contact: {
    title: string;
    email: string;
    emailLabel: string;
    github: string;
    linkedin: string;
    status: string;
  };
  buttons: {
    downloadCv: string;
    stackOverflow: string;
    inspectSource: string;
  };
  rights: string;
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    nav: {
      profile: "Identity",
      expertise: "Stack",
      projects: "Archives",
      contact: "Dialogue",
    },
    hero: {
      name: "Alex Trace",
      role: "Full-Stack Software Engineer",
      location: "Lyon, FR / Remote",
      statusLabel: "Availability Status",
      cvFilename: "Alex_Trace_CV.pdf",
      quote:
        "Focusing on TypeScript-driven architectures and distributed system design.",
      bio: "Engineering clean solutions for complex digital problems. I specialize in building robust TypeScript ecosystems and accessible user interfaces. Currently focusing on distributed systems and high-performance frontend architecture.",
    },
    expertise: {
      title: "Technical Lexicon",
      categories: [
        {
          name: "Foundations",
          skills: ["TypeScript", "Node.js", "Python", "Go"],
        },
        {
          name: "Interface",
          skills: [
            "React 18",
            "Next.js",
            "Tailwind CSS",
            "Framer Motion",
            "Radix UI",
          ],
        },
        {
          name: "Systems",
          skills: [
            "PostgreSQL",
            "Prisma ORM",
            "Docker",
            "Kubernetes",
            "Redis",
            "gRPC",
          ],
        },
        {
          name: "Reliability",
          skills: ["Jest", "Cypress", "GitHub Actions", "TDD", "Sentry"],
        },
      ],
    },
    projects: {
      title: "Engineering Archives",
      list: [
        {
          title: "Streamline VOD",
          role: "Backend Engineer",
          description:
            "A serverless video-on-demand processing pipeline designed for high-concurrency ingestion.",
          tech: ["Node.js", "AWS Lambda", "FFmpeg", "S3"],
          challenge:
            "Standard monolithic uploads were timing out during peak traffic, leading to data loss.",
          solution:
            "Architected a multi-part upload system using AWS S3 Pre-signed URLs and parallel transcoding.",
          outcome:
            "Reduced processing costs by 30% and achieved 99.9% successful ingestion rate.",
          link: "https://github.com/alex-trace/streamline",
        },
        {
          title: "Nexus Semantic Search",
          role: "Full-Stack Developer",
          description:
            "AI-powered documentation search engine utilizing vector embeddings for conceptual queries.",
          tech: ["Python", "OpenAI", "Pinecone", "Next.js"],
          challenge:
            "Keyword search failed to return relevant results for conceptual technical queries.",
          solution:
            "Integrated OpenAI's text-embeddings with Pinecone vector database for similarity matching.",
          outcome:
            "Improved search relevance by 60% and reduced user 'time-to-answer' from 4m to 12s.",
          link: "https://github.com/alex-trace/nexus-search",
        },
        {
          title: "SyncCollab Engine",
          role: "Real-time Systems",
          description:
            "A collaborative workspace engine supporting high-frequency state synchronization across distributed clients.",
          tech: ["TypeScript", "Socket.io", "Redis", "React"],
          challenge:
            "Users experienced 'state-drift' and race conditions during simultaneous document edits.",
          solution:
            "Implemented Operational Transformation (OT) logic with a Redis-backed message broker to sequence updates.",
          outcome:
            "Achieved sub-50ms sync latency and zero reported data conflicts over 5,000 test sessions.",
          link: "#",
        },
        {
          title: "Pulse-Check Ops",
          role: "DevOps / Reliability",
          description:
            "Automated observability platform for monitoring health across 20+ microservices.",
          tech: ["Go", "Prometheus", "Grafana", "Docker"],
          challenge:
            "The dev team lacked visibility into silent service failures, leading to high Mean Time To Recovery (MTTR).",
          solution:
            "Developed a lightweight sidecar in Go to export custom metrics and configured automated alerting via Slack.",
          outcome:
            "Reduced MTTR by 45% and established a 99.95% uptime baseline through proactive failure detection.",
          link: "#",
        },
      ],
    },
    contact: {
      title: "Contact",
      email: "alex@trace.codes",
      emailLabel: "Electronic Mail",
      github: "github.com/alextrace",
      linkedin: "linkedin.com/in/alextrace",
      status: "Actively seeking Full-Stack roles for Q3 2026.",
    },
    buttons: {
      downloadCv: "Download CV",
      stackOverflow: "Stack Overflow",
      inspectSource: "Inspect Source",
    },
    rights: "Alex Trace — 2026 Portfolio",
  },
  fr: {
    nav: {
      profile: "Identité",
      expertise: "Stack",
      projects: "Archives",
      contact: "Dialogue",
    },
    hero: {
      name: "Alex Trace",
      role: "Ingénieur Logiciel Full-Stack",
      location: "Lyon, FR / Distanciel",
      statusLabel: "Statut de Disponibilité",
      cvFilename: "Alex_Trace_CV.pdf",
      quote:
        "Focus sur les architectures TypeScript et la conception de systèmes distribués.",
      bio: "Conception de solutions épurées pour des problèmes complexes. Spécialisé dans les écosystèmes TypeScript robustes et les interfaces accessibles.",
    },
    expertise: {
      title: "Lexique Technique",
      categories: [
        { name: "Bases", skills: ["TypeScript", "Node.js", "Python", "Go"] },
        {
          name: "Interface",
          skills: ["React 18", "Next.js", "Tailwind CSS", "Framer Motion"],
        },
        {
          name: "Systèmes",
          skills: ["PostgreSQL", "Prisma", "Docker", "Kubernetes", "Redis"],
        },
        { name: "Fiabilité", skills: ["Jest", "Cypress", "CI/CD", "TDD"] },
      ],
    },
    projects: {
      title: "Archives Techniques",
      list: [
        {
          title: "Streamline VOD",
          role: "Ingénieur Backend",
          description:
            "Pipeline de traitement vidéo serverless conçu pour une ingestion haute performance.",
          tech: ["Node.js", "AWS Lambda", "FFmpeg"],
          challenge:
            "Les téléchargements monolithiques échouaient lors des pics de trafic.",
          solution:
            "Architecture d'upload multi-parties utilisant AWS S3 et Lambda.",
          outcome:
            "Réduction des coûts de 30% et taux de succès d'ingestion de 99.9%.",
          link: "#",
        },
        {
          title: "Nexus Semantic Search",
          role: "Développeur Full-Stack",
          description:
            "Moteur de recherche documentaire alimenté par l'IA utilisant des vector embeddings.",
          tech: ["Python", "OpenAI", "Pinecone"],
          challenge:
            "La recherche par mots-clés ne renvoyait pas de résultats pertinents pour les requêtes conceptuelles.",
          solution:
            "Intégration des embeddings OpenAI avec Pinecone pour une correspondance par similarité.",
          outcome:
            "Amélioration de la pertinence de 60% et réduction du temps de réponse de 4m à 12s.",
          link: "#",
        },
      ],
    },
    contact: {
      title: "Contact",
      email: "alex@trace.codes",
      emailLabel: "Courrier Électronique",
      github: "github.com/alextrace",
      linkedin: "linkedin.com/in/alextrace",
      status: "Recherche active de postes Full-Stack pour T3 2026.",
    },
    buttons: {
      downloadCv: "Télécharger le CV",
      stackOverflow: "Stack Overflow",
      inspectSource: "Voir le Code",
    },
    rights: "Alex Trace — Portfolio 2026",
  },
};
