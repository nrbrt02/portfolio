import { FC } from "react";
import { IconType } from "react-icons";

interface SkillBadgeProps {
  label: string;
  Icon?: IconType;
}

const SkillBadge: FC<SkillBadgeProps> = ({ label, Icon }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-medium rounded-lg shadow hover:scale-105 transition-transform">
      {Icon && <Icon className="text-xl" />}
      <span>{label}</span>
    </div>
  );
};

export default SkillBadge;
