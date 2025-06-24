import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

interface Repo {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
}

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/nrbrt02/repos?per_page=100')
      .then((r) => r.json())
      .then((data) => {
        const filtered: Repo[] = data
          .filter((r: any) => !r.fork && !r.private)
          .sort(
            (a: any, b: any) =>
              new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          )
          .map((r: any) => ({
            name: r.name,
            description: r.description,
            html_url: r.html_url,
            topics: r.topics || [],
          }));
        setRepos(filtered);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-16">
      <h2 className="text-4xl font-extrabold text-center mb-12">Projects</h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {isLoading ? (
          Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-[300px] h-[220px] bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse p-6 shadow-md"
            >
              <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-4" />
              <div className="h-3 w-full bg-gray-300 dark:bg-gray-700 rounded mb-2" />
              <div className="h-3 w-5/6 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
              <div className="h-3 w-1/2 bg-gray-300 dark:bg-gray-700 rounded mt-4" />
            </div>
          ))
        ) : (
          repos.map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="w-[300px] bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                <FaGithub className="text-xl text-gray-700 dark:text-gray-200" />
                <h3 className="text-lg font-semibold">{repo.name}</h3>
              </div>

              <p className="text-sm text-gray-700 dark:text-gray-300">
                {repo.description || 'No description provided.'}
              </p>

              {repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="bg-pink-100 dark:bg-pink-800 text-pink-800 dark:text-pink-100 text-xs px-2 py-1 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-medium text-pink-600 hover:underline"
              >
                View on GitHub →
              </a>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
