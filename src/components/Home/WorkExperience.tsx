import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const workHistory = [
  {
    company: "Insureflow",
    date: "Aug 2024 – Sep 2024",
    description: "Insurance platform for accident claims",
    tags: ["Node.js", "Apache", "MySQL"],
    link: "https://insureflow.rw/",
  },
  {
    company: "DMS System",
    date: "Nov 2024 – Jan 2025",
    description: "Document digitalization & access control",
    tags: ["Next.js", "PostgreSQL", "Docker"],
    link: "https://minaffet.staging.avivtech.digital/",
  },
  {
    company: "Inventory Management",
    date: "Mar 2025 – June 2025",
    description: "An inventory management system for a small factory",
    tags: ["NodeJs", "React", "PostgreSQL"],
    link: "https://testing.gvibyequ.a2hosted.com/",
  },
  {
    company: "FastShopping",
    date: "Jan 2025 – Mar 2025",
    description: "E-commerce platform",
    tags: ["NodeJs", "Tailwind", "PostgreSQL"],
    link: "https://fastshopping.rw/",
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
            className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px] bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow snap-start"
          >
            <div className="flex flex-col gap-1 mb-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.company}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-sm">{item.description}</p>

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
                  View Project →
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
