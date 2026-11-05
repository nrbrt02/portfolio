import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const links = ["Skills", "Projects", "About", "Contact"];
  const [active, setActive] = useState("");

  // Highlight the link for the section currently in view
  useEffect(() => {
    const ids = ["home", ...links.map((l) => l.toLowerCase())];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-xl font-extrabold tracking-tight text-pink-600 hover:text-pink-700 transition"
        >
          ⌘Nor
        </a>

        <div className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base">
          {links.map((link) => {
            const id = link.toLowerCase();
            const isActive = active === id;

            return (
              <a
                key={link}
                href={`#${id}`}
                className={`font-medium transition-colors ${
                  isActive
                    ? "text-pink-600"
                    : "text-gray-700 dark:text-gray-300 hover:text-pink-500"
                }`}
              >
                {link}
              </a>
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
