import { FC } from "react";
import SkillBadge from "./SkillBadge";
import { IconType } from "react-icons";

interface Skill {
  label: string;
  Icon?: IconType;
}

interface SkillSectionProps {
  title: string;
  skills: Skill[];
}

const SkillSection: FC<SkillSectionProps> = ({ title, skills }) => {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-bold text-pink-600 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <SkillBadge key={skill.label} label={skill.label} Icon={skill.Icon} />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
