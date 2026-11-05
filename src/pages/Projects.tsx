import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  name: string;
  description: string;
  topics: string[];
  links: { label: string; href: string }[];
}

// Main projects from the resume come first, earlier work follows
const mainProjects: Project[] = [
  {
    name: 'NenoDoc',
    description:
      'A suite of digital archive platforms (AEGIS) with OCR, classification and indexing pipelines, LLM summaries, tags and Q&A over documents, and pgvector semantic search. Runs on AWS and on-premise servers.',
    topics: ['python', 'django', 'postgresql', 'pgvector', 'llm', 'rag', 'docker', 'nginx'],
    links: [],
  },
  {
    name: 'ProWater MIS',
    description:
      'Factory ERP for ProWater Rwanda covering inventory, bill of materials, production, purchasing, sales and petty cash, with multi-step approvals, PDF/Excel reports and real-time notifications.',
    topics: ['typescript', 'nodejs', 'express', 'postgresql', 'react', 'tailwind', 'socket-io', 'docker'],
    links: [
      { label: 'API on GitHub', href: 'https://github.com/nrbrt02/prowater-mis-api' },
      { label: 'UI on GitHub', href: 'https://github.com/nrbrt02/prowater-mis-ui' },
    ],
  },
];

const otherProjects: Project[] = [
  {
    name: 'Insureflow',
    description: 'Insurance platform for accident claims.',
    topics: ['nodejs', 'mysql', 'apache'],
    links: [{ label: 'View Project', href: 'https://insureflow.rw/' }],
  },
  {
    name: 'DMS System',
    description: 'Document digitalization & access control.',
    topics: ['nextjs', 'postgresql', 'docker'],
    links: [{ label: 'View Project', href: 'https://minaffet.staging.avivtech.digital/' }],
  },
  {
    name: 'FastShopping',
    description: 'E-commerce platform.',
    topics: ['nodejs', 'tailwind', 'postgresql'],
    links: [{ label: 'View Project', href: 'https://fastshopping.rw/' }],
  },
  {
    name: 'Inventory Management',
    description: 'An inventory management system for a small factory.',
    topics: ['nodejs', 'react', 'postgresql'],
    links: [{ label: 'View Project', href: 'https://testing.gvibyequ.a2hosted.com/' }],
  },
];

const ProjectCard = ({ project, i, wide }: { project: Project; i: number; wide?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: i * 0.1 }}
    className={`${wide ? 'w-full md:w-[460px]' : 'w-[300px]'} bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow`}
  >
    <div className="flex items-center gap-2 mb-3">
      <FaGithub className="text-xl text-gray-700 dark:text-gray-200" />
      <h3 className="text-lg font-semibold">{project.name}</h3>
    </div>

    <p className="text-sm text-gray-700 dark:text-gray-300">{project.description}</p>

    <div className="flex flex-wrap gap-2 mt-3">
      {project.topics.map((topic) => (
        <span
          key={topic}
          className="bg-pink-100 dark:bg-pink-800 text-pink-800 dark:text-pink-100 text-xs px-2 py-1 rounded-full"
        >
          {topic}
        </span>
      ))}
    </div>

    {project.links.length > 0 && (
      <div className="flex flex-wrap gap-4 mt-4">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-pink-600 hover:underline"
          >
            {link.label} <FaExternalLinkAlt className="text-xs" />
          </a>
        ))}
      </div>
    )}
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-16 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-16">
      <h2 className="text-4xl font-extrabold text-center mb-12">Projects</h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {mainProjects.map((project, i) => (
          <ProjectCard key={project.name} project={project} i={i} wide />
        ))}
      </div>

      <h3 className="text-2xl font-bold text-pink-600 text-center mt-16 mb-8">Other Projects</h3>
      <div className="flex flex-wrap gap-6 justify-center">
        {otherProjects.map((project, i) => (
          <ProjectCard key={project.name} project={project} i={i} />
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="https://github.com/nrbrt02"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-semibold rounded-xl transition"
        >
          More on GitHub →
        </a>
      </div>
    </section>
  );
};

export default Projects;
