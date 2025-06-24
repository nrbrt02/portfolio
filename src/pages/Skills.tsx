import { motion } from "framer-motion";
import SkillSection from "../components/skills/SkillSection";

// ICONS
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaGitAlt, FaGithub,
  FaDocker, FaAws, FaLinux, FaJava, FaFigma, FaDatabase, FaJs, FaPhp,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiMysql, SiExpress,
  SiFirebase, SiNextdotjs, SiCpanel, SiApache, SiNginx, SiKubernetes, SiVagrant,
 SiJirasoftware, SiPostman, SiSpringboot, SiFramer,
  SiSqlite, SiDjango, SiProxmox, SiJsonwebtokens,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
    <motion.div
      className="max-w-6xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
        Skills & Technologies
      </h2>

      <SkillSection
        title="Programming Languages"
        skills={[
          { label: "JavaScript", Icon: FaJs },
          { label: "TypeScript", Icon: SiTypescript },
          { label: "Python", Icon: FaPython },
          { label: "Java", Icon: FaJava },
          { label: "C/C++" },
          { label: "Bash" },
        ]}
      />
      <SkillSection
        title="Frontend Development"
        skills={[
          { label: "React", Icon: FaReact },
          { label: "Next.js", Icon: SiNextdotjs },
          { label: "Tailwind CSS", Icon: SiTailwindcss },
          { label: "Bootstrap", Icon: FaBootstrap },
          { label: "HTML5", Icon: FaHtml5 },
          { label: "CSS3", Icon: FaCss3Alt },
          { label: "Framer Motion", Icon: SiFramer },
          { label: "UI/UX Design", Icon: FaFigma },
        ]}
      />
      <SkillSection
        title="Backend & APIs"
        skills={[
          { label: "Node.js", Icon: FaNodeJs },
          { label: "Express", Icon: SiExpress },
          { label: "Django", Icon: SiDjango },
          { label: "Spring Boot", Icon: SiSpringboot },
          { label: "REST API" },
          { label: "JWT Auth", Icon: SiJsonwebtokens },
        ]}
      />
      <SkillSection
        title="Databases"
        skills={[
          { label: "MySQL", Icon: SiMysql },
          { label: "PostgreSQL", Icon: SiPostgresql },
          { label: "MongoDB", Icon: SiMongodb },
          { label: "SQLite", Icon: SiSqlite },
        ]}
      />
      <SkillSection
        title="DevOps & Cloud"
        skills={[
          { label: "Docker", Icon: FaDocker },
          { label: "Kubernetes", Icon: SiKubernetes },
          { label: "Vagrant", Icon: SiVagrant },
          { label: "Proxmox", Icon: SiProxmox },
          { label: "Git", Icon: FaGitAlt },
          { label: "GitHub", Icon: FaGithub },
          { label: "GitHub Actions" },
          { label: "Firebase", Icon: SiFirebase },
          { label: "AWS", Icon: FaAws },
          { label: "Netlify" },
          { label: "Vercel" },
          { label: "cPanel", Icon: SiCpanel },
        ]}
      />
      <SkillSection
        title="Web Servers & Security"
        skills={[
          { label: "NGINX", Icon: SiNginx },
          { label: "Apache", Icon: SiApache },
          { label: "Suricata" },
          { label: "pfSense" },
          { label: "SSH & Firewalls" },
        ]}
      />
      <SkillSection
        title="Tools & Platforms"
        skills={[
          { label: "Linux", Icon: FaLinux },
          { label: "Postman", Icon: SiPostman },
          { label: "Visual Studio Code" },
          { label: "Figma", Icon: FaFigma },
          { label: "Jira", Icon: SiJirasoftware },
        ]}
      />
    </motion.div>
    </div>
  );
};

export default Skills;
