import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="scroll-mt-16 px-6 py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <motion.div
        className="max-w-5xl mx-auto space-y-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Top: Photo + Intro */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold text-pink-600">About Me</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I’m <span className="font-semibold text-pink-600">Norbert</span>, a full-stack software engineer who
              enjoys taking an idea all the way from first line of code to a running server. I’m driven by
              curiosity, pick up new technologies quickly, and care about building software that solves real
              problems for the people who use it.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I work best in collaborative teams where ideas are shared openly, and I’m always looking for the
              next challenge that pushes me to grow.
            </p>
          </div>
        </div>

        {/* Timeline Experience */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-pink-600">Journey</h3>
          <div className="border-l-2 border-pink-600 pl-6 space-y-6">
            {[
                {
                    title: "Started BSc in Software Engineering",
                    date: "2022",
                    text: "Bachelor of Information Technology: Software Engineering at Adventist University of Central Africa, Kigali.",
                },
                {
                    title: "Microsoft Azure Certifications",
                    date: "2023",
                    text: "Azure Fundamentals (AZ-900) and Azure AI Fundamentals (AI-900).",
                },
                {
                    title: "Built Full-Stack Industry Projects",
                    date: "2024 – 2025",
                    text: "Delivered insurance, document management, e-commerce and inventory platforms.",
                },
                {
                    title: "Freelance Full-Stack Developer, ProWater Rwanda",
                    date: "Oct 2025 – Jun 2026",
                    text: "Built ProWater MIS, a factory ERP with a TypeScript API, React dashboard and Docker deployment.",
                },
                {
                    title: "Software Engineer, AEGIS",
                    date: "Feb 2026 – Present",
                    text: "Building NenoDoc digital archive platforms with document processing, LLMs and pgvector, deployed on AWS and on-premise.",
                },
                {
                    title: "Graduating",
                    date: "2026",
                    text: "Finishing my BSc in Software Engineering.",
                },
                ]
                .map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-6"
            >
                {/* Timeline dot centered on the border */}
                <span className="absolute -left-[17px] top-2 w-4 h-4 bg-pink-600 rounded-full border-4 border-white dark:border-gray-900" />
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{item.text}</p>
            </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center pt-10 border-t border-gray-300 dark:border-gray-700">
          <p className="text-xl mb-4">Want to work together or ask me something?</p>
          <a
            href="#contact"
            className="inline-block px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            Contact Me →
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
