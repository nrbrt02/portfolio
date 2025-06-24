const workHistory = [
  {
    company: "Insureflow",
    date: "Aug 2024 – Sep 2024",
    description: "Insurance platform for accident claims",
    tags: ["React", "Azure", "Node.js"],
  },
  {
    company: "DMS System",
    date: "Nov 2024 – Jan 2025",
    description: "Document digitalization & access control",
    tags: ["PHP", "Laravel", "PostgreSQL"],
  },
  {
    company: "FastShopping",
    date: "Jan 2025 – Mar 2025",
    description: "E-commerce platform",
    tags: ["Django", "Tailwind", "MySQL"],
  },
];

const WorkExperience = () => {
  return (
    <div className="mt-10 space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Work</h2>
      {workHistory.map((item, i) => (
        <div key={i}>
          <h3 className="text-xl font-bold">{item.company}</h3>
          <p className="text-sm text-gray-500">{item.date}</p>
          <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 dark:bg-gray-700 text-sm px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
