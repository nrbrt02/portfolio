import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Work = {
  company: string;
  role: string;
  date: string;
  description: string;
  points: string[];
  tags: string[];
  link?: string;
};

const workHistory: Work[] = [
  {
    company: "AEGIS",
    role: "Software Engineer · Kigali",
    date: "Feb 2026 – Present",
    description:
      "Plan, develop and deploy NenoDoc, a suite of digital archive platforms with automated document processing.",
    points: [
      "Document processing pipelines (OCR, classification, indexing) in Python/Django",
      "LLMs that summarize, tag and answer questions over archived documents",
      "PostgreSQL data model with pgvector for semantic search",
      "Deploy and run on AWS and on-premise servers, from setup to releases",
      "Sprint planning for a team of 5, working directly with clients",
    ],
    tags: ["Python", "Django", "PostgreSQL", "pgvector", "LLMs", "AWS"],
  },
  {
    company: "ProWater Rwanda",
    role: "Freelance Full-Stack Developer",
    date: "Oct 2025 – Jun 2026",
    description:
      "Built ProWater MIS, a full-stack ERP for a water-manufacturing factory.",
    points: [
      "Inventory, bill of materials, production, purchasing, sales and petty cash",
      "TypeScript REST API with JWT auth, multi-step approvals, email and PDF/Excel reports",
      "React + Tailwind dashboard with live charts and Socket.IO notifications",
      "Containerized with Docker Compose and Nginx for production",
    ],
    tags: ["TypeScript", "Node.js", "React", "PostgreSQL", "Docker"],
    link: "https://github.com/nrbrt02/prowater-mis-api",
  },
];

const WorkExperience = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 360 + 24; // card width + gap
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-pink-600">Work Experience</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-white hover:bg-pink-200 transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-white hover:bg-pink-200 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-6 py-4 px-1 scrollbar-thin scrollbar-thumb-pink-400 scrollbar-track-transparent snap-x snap-mandatory"
      >
        {workHistory.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="min-w-[280px] sm:min-w-[340px] md:min-w-[420px] max-w-[460px] bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow snap-start"
          >
            <div className="flex flex-col gap-1 mb-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.company}</h3>
              <p className="text-sm font-medium text-pink-600">{item.role}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-sm">{item.description}</p>

            <ul className="mt-3 space-y-1 list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-3">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-pink-100 dark:bg-pink-800 text-pink-800 dark:text-pink-100 text-xs px-3 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {item.link && (
              <div className="mt-4">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-pink-600 hover:underline font-medium"
                >
                  View on GitHub →
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
