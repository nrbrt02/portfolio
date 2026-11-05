// All site copy lives here. It mirrors the resume, so update both together.

export const profile = {
  name: "Norbert Mwiseneza",
  firstName: "Norbert",
  role: "Full-Stack Software Engineer",
  location: "Kigali, Rwanda",
  email: "nor.imurinde@gmail.com",
  github: "https://github.com/nrbrt02",
  linkedin: "https://www.linkedin.com/in/norbert-mwiseneza",
  resume:
    "https://docs.google.com/document/d/1dcbcRDPTUNFZwZXMDPLfgpbjt2U1CaiG/edit?usp=sharing&ouid=103324068879615888343&rtpof=true&sd=true",
  tagline:
    "I take ideas all the way from the first line of code to a running server.",
  summary: [
    "I'm a full-stack software engineer who enjoys taking an idea all the way from first line of code to a running server. I'm driven by curiosity, pick up new technologies quickly, and care about building software that solves real problems for the people who use it.",
    "I work best in collaborative teams where ideas are shared openly, and I'm always looking for the next challenge that pushes me to grow.",
  ],
};

export const strengths = [
  {
    title: "Build",
    text: "Python/Django and Node.js back ends, React + TypeScript front ends, and clean PostgreSQL data models.",
  },
  {
    title: "Add intelligence",
    text: "LLM features that summarize, tag and answer questions over real documents, backed by pgvector search.",
  },
  {
    title: "Ship & run",
    text: "Server setup, Docker, Nginx and releases on AWS or on-premise Proxmox / Ubuntu machines.",
  },
];

export type Job = {
  company: string;
  role: string;
  location?: string;
  period: string;
  intro: string;
  points: string[];
  stack: string[];
  links?: { label: string; href: string }[];
};

export const experience: Job[] = [
  {
    company: "AEGIS",
    role: "Software Engineer",
    location: "Kigali, Rwanda",
    period: "Feb 2026 – Present",
    intro:
      "Plan, develop and deploy NenoDoc, a suite of digital archive platforms for clients with automated document processing.",
    points: [
      "Built document processing pipelines (OCR, classification, indexing) in Python/Django.",
      "Integrated LLMs to summarize, tag and answer questions over archived documents.",
      "Designed the PostgreSQL data model, using pgvector for semantic search across documents.",
      "Deploy and run the platforms end to end on AWS and on-premise servers, from server setup to configuration and releases.",
      "Run day-to-day sprint planning for a team of 5 and work directly with clients on requirements.",
    ],
    stack: ["Python", "Django", "PostgreSQL", "pgvector", "LLMs", "AWS", "Proxmox", "Docker", "Nginx"],
  },
  {
    company: "ProWater Rwanda",
    role: "Freelance Full-Stack Developer",
    period: "Oct 2025 – Jun 2026",
    intro:
      "Built ProWater MIS, a full-stack ERP for a water-manufacturing factory.",
    points: [
      "Covered inventory, bill of materials, production, purchasing, sales and petty cash in one system.",
      "Developed a TypeScript REST API (Node.js, Express, Sequelize, PostgreSQL) with JWT auth, role-based multi-step approval workflows, and automated email and PDF/Excel reporting.",
      "Built a React + TypeScript + Tailwind dashboard with live charts and real-time notifications over Socket.IO.",
      "Containerized the full stack with Docker Compose and Nginx for production deployment.",
    ],
    stack: ["TypeScript", "Node.js", "Express", "PostgreSQL", "React", "Tailwind", "Socket.IO", "Docker"],
    links: [
      { label: "API repo", href: "https://github.com/nrbrt02/prowater-mis-api" },
      { label: "UI repo", href: "https://github.com/nrbrt02/prowater-mis-ui" },
    ],
  },
];

export type Project = {
  name: string;
  context: string;
  description: string;
  highlights?: string[];
  stack: string[];
  links?: { label: string; href: string }[];
};

export const featuredProjects: Project[] = [
  {
    name: "NenoDoc",
    context: "AEGIS · 2026",
    description:
      "A suite of digital archive platforms that turn piles of scanned documents into a searchable, question-answerable archive.",
    highlights: [
      "OCR → classification → indexing pipeline",
      "LLM summaries, tags and Q&A over documents",
      "Semantic search with PostgreSQL + pgvector",
      "Runs on AWS and on-premise servers",
    ],
    stack: ["Python", "Django", "PostgreSQL", "pgvector", "LLMs", "RAG", "Docker", "Nginx"],
  },
  {
    name: "ProWater MIS",
    context: "ProWater Rwanda · 2025–2026",
    description:
      "A factory ERP that runs inventory, production, purchasing, sales and petty cash for a water manufacturer.",
    highlights: [
      "Role-based, multi-step approval workflows",
      "Automated email + PDF/Excel reports",
      "Live dashboard with real-time Socket.IO notifications",
      "Dockerized stack behind Nginx",
    ],
    stack: ["TypeScript", "Node.js", "Express", "Sequelize", "PostgreSQL", "React", "Tailwind", "Socket.IO"],
    links: [
      { label: "API", href: "https://github.com/nrbrt02/prowater-mis-api" },
      { label: "UI", href: "https://github.com/nrbrt02/prowater-mis-ui" },
    ],
  },
];

export const otherProjects: Project[] = [
  {
    name: "Insureflow",
    context: "2024",
    description: "Insurance platform for handling accident claims.",
    stack: ["Node.js", "MySQL", "Apache"],
    links: [{ label: "Live", href: "https://insureflow.rw/" }],
  },
  {
    name: "Document Management System",
    context: "2024–2025",
    description: "Document digitization with role-based access control.",
    stack: ["Next.js", "PostgreSQL", "Docker"],
    links: [{ label: "Live", href: "https://minaffet.staging.avivtech.digital/" }],
  },
  {
    name: "FastShopping",
    context: "2025",
    description: "E-commerce platform for online shopping.",
    stack: ["Node.js", "Tailwind", "PostgreSQL"],
    links: [{ label: "Live", href: "https://fastshopping.rw/" }],
  },
  {
    name: "Inventory Management",
    context: "2025",
    description: "Inventory management system for a small factory.",
    stack: ["Node.js", "React", "PostgreSQL"],
    links: [{ label: "Live", href: "https://testing.gvibyequ.a2hosted.com/" }],
  },
];

export const skillGroups: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["Python", "TypeScript", "JavaScript"] },
  { title: "Frontend", items: ["React", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js (Express)", "Django", "REST APIs"] },
  { title: "Databases", items: ["PostgreSQL", "pgvector"] },
  { title: "AI", items: ["LLM integration", "RAG (retrieval over documents)"] },
  { title: "Cloud & Infrastructure", items: ["AWS", "Microsoft Azure", "Proxmox", "Ubuntu Server"] },
  { title: "DevOps", items: ["Docker", "Nginx", "Terraform", "Vagrant"] },
  { title: "Spoken languages", items: ["Kinyarwanda (native)", "English (C1)"] },
];

export const education = {
  degree: "Bachelor of Information Technology: Software Engineering",
  school: "Adventist University of Central Africa",
  location: "Kigali",
  period: "2022 – 2026",
};

export const certifications = [
  { name: "Microsoft Certified: Azure Fundamentals", code: "AZ-900", year: "2023" },
  { name: "Microsoft Certified: Azure AI Fundamentals", code: "AI-900", year: "2023" },
];
