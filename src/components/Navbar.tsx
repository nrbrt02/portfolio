import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const links = ["Skills","Work", "Project", "About"];

  return (
    <nav className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Norbert</h1>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className="text-gray-700 dark:text-gray-300 hover:text-pink-500 transition font-medium"
            >
              {link}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className="text-gray-700 dark:text-gray-300"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
