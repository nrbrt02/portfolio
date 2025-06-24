import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const location = useLocation();
  const links = ["Skills", "Projects", "About", "Contact"];

  return (
    <nav className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-extrabold tracking-tight text-pink-600 hover:text-pink-700 transition"
        >
          ⌘Nor
        </Link>

        <div className="flex items-center gap-6">
          {links.map((link) => {
            const href = `/${link.toLowerCase()}`;
            const isActive = location.pathname === href;

            return (
              <Link
                key={link}
                to={href}
                className={`font-medium transition-colors ${
                  isActive
                    ? "text-pink-600"
                    : "text-gray-700 dark:text-gray-300 hover:text-pink-500"
                }`}
              >
                {link}
              </Link>
            );
          })}

          <button
            onClick={toggleDarkMode}
            className="text-gray-700 dark:text-gray-300 hover:text-pink-500 transition"
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
