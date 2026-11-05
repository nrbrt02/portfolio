import { motion } from "framer-motion";
import SkillSection from "../components/skills/SkillSection";

// ICONS
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaJs } from "react-icons/fa";
import {
  SiTypescript, SiTailwindcss, SiPostgresql, SiExpress, SiNginx, SiVagrant,
  SiDjango, SiProxmox, SiTerraform, SiUbuntu, SiOpenai,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { TbVectorTriangle } from "react-icons/tb";

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-16 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
    <motion.div
      className="max-w-6xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
        Skills & Technologies
      </h2>

      <SkillSection
        title="Programming Languages"
        skills={[
          { label: "Python", Icon: FaPython },
          { label: "TypeScript", Icon: SiTypescript },
          { label: "JavaScript", Icon: FaJs },
        ]}
      />
      <SkillSection
        title="Frontend Development"
        skills={[
          { label: "React", Icon: FaReact },
          { label: "Tailwind CSS", Icon: SiTailwindcss },
        ]}
      />
      <SkillSection
        title="Backend & APIs"
        skills={[
          { label: "Node.js", Icon: FaNodeJs },
          { label: "Express", Icon: SiExpress },
          { label: "Django", Icon: SiDjango },
          { label: "REST APIs" },
        ]}
      />
      <SkillSection
        title="Databases"
        skills={[
          { label: "PostgreSQL", Icon: SiPostgresql },
          { label: "pgvector", Icon: TbVectorTriangle },
        ]}
      />
      <SkillSection
        title="AI"
        skills={[
          { label: "LLM Integration", Icon: SiOpenai },
          { label: "RAG (retrieval over documents)" },
        ]}
      />
      <SkillSection
        title="Cloud & Infrastructure"
        skills={[
          { label: "AWS", Icon: FaAws },
          { label: "Microsoft Azure", Icon: VscAzure },
          { label: "Proxmox", Icon: SiProxmox },
          { label: "Ubuntu Server", Icon: SiUbuntu },
        ]}
      />
      <SkillSection
        title="DevOps"
        skills={[
          { label: "Docker", Icon: FaDocker },
          { label: "NGINX", Icon: SiNginx },
          { label: "Terraform", Icon: SiTerraform },
          { label: "Vagrant", Icon: SiVagrant },
        ]}
      />
      <SkillSection
        title="Spoken Languages"
        skills={[
          { label: "Kinyarwanda (native)" },
          { label: "English (C1)" },
        ]}
      />
    </motion.div>
    </section>
  );
};

export default Skills;
