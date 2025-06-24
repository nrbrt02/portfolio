import SkillBadge from "./SkillBadge";
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaLinux } from "react-icons/fa";
import { SiTypescript, SiDocker, SiPostgresql } from "react-icons/si";
import { Link } from "react-router-dom";

const TopSkillsPreview = () => {
  const topSkills = [
    { label: "Node.js", Icon: FaNodeJs },
    { label: "React", Icon: FaReact },
    { label: "Python", Icon: FaPython },
    { label: "PostgreSQL", Icon: SiPostgresql },
    { label: "Docker", Icon: SiDocker },
    { label: "Linux", Icon: FaLinux },
  ];

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
        <h3 className="text-2xl font-bold text-pink-600">Top Skills</h3>
      </div>
      <div className="flex flex-wrap gap-4">
        {topSkills.map((skill) => (
          <SkillBadge key={skill.label} label={skill.label} Icon={skill.Icon} />
        ))}
        <Link
          to="/skills"
          className="text-sm px-4 py-1.5 border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-medium rounded-lg transition"
        >
          ... See More →
        </Link>
      </div>
    </div>
  );
};

export default TopSkillsPreview;
