import { motion } from "framer-motion";
import ProfileImage from "../components/Home/ProfileImage";

const About = () => {
  return (
    <div className="min-h-screen px-6 py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <motion.div
        className="max-w-5xl mx-auto space-y-14"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Top: Photo + Intro */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/3">
            <ProfileImage />
          </div>
          <div className="md:w-2/3 space-y-4">
            <h2 className="text-4xl font-extrabold text-pink-600">About Me</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I’m <span className="font-semibold text-pink-600">Norbert</span>, a full-stack developer who
              enjoys turning ideas into functional, accessible, and elegant digital experiences.
              With projects in insurance, inventory, ecommerce, and DevOps — I bring both creativity
              and precision to every build.
            </p>
          </div>
        </div>

        {/* Timeline Experience */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-pink-600">Journey</h3>
          <div className="border-l-2 border-pink-600 pl-6 space-y-6">
            {[
                {
                    title: "Started Learning Web Development",
                    date: "2019",
                    text: "Built my first website using HTML, CSS, JavaScript, and PHP.",
                },
                {
                    title: "Explored Backend Technologies",
                    date: "2021",
                    text: "Focused on Laravel and backend logic.",
                },
                {
                    title: "Worked on REST APIs & Real-World Systems",
                    date: "2022",
                    text: "Designed real projects with modern APIs.",
                },
                {
                    title: "Explored Infrastructure & DevOps",
                    date: "2023",
                    text: "Docker, Nginx, servers, and deployment techniques.",
                },
                {
                    title: "Built Full-Stack Industry Projects",
                    date: "2024",
                    text: "Delivered insurance, document systems, ecommerce & inventory platforms.",
                },
                {
                    title: "Deep Dive into Cloud & Collaboration",
                    date: "2025 (Now)",
                    text: "Focused on DevOps (Docker, Kubernetes, CI/CD), and growing developer community.",
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
            href="/contact"
            className="inline-block px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            Contact Me →
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
