import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const topProjects = [
  {
    name: "Data mining",
    description: "Analyzing data mining techniques and strategies",
    link: "https://github.com/nrbrt02/datamining-api",
    tags: ["React", "Node.Js", "PostgreSql"],
  },
  {
    name: "News API",
    description: "An api application which server news",
    link: "https://github.com/nrbrt02/newsapp-backend",
    tags: ["Springboot", "Java", "PostgreSQL"],
  },
  {
    name: "CarParking",
    description: "parking sport management application",
    link: "https://github.com/nrbrt02/carparking",
    tags: ["Django", "Bootstrap", "SqLite"],
  },
];

const TopProjectsPreview = () => {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
        <h3 className="text-2xl font-bold text-pink-600">Top Projects</h3>
      </div>

      <div className="flex flex-wrap gap-6">
        {topProjects.map((project) => (
          <div
            key={project.name}
            className="w-full md:w-[300px] bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-2 mb-2">
              <FaGithub className="text-xl text-gray-700 dark:text-white" />
              <h4 className="text-lg font-semibold">{project.name}</h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-pink-100 dark:bg-pink-800 text-pink-800 dark:text-pink-100 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-3">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-pink-600 hover:underline font-medium"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
        <Link
          to="/projects"
          className="text-sm px-4 py-1.5 border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-medium rounded-lg transition h-fit self-end"
        >
          ... See More →
        </Link>
      </div>
    </div>
  );
};

export default TopProjectsPreview;
