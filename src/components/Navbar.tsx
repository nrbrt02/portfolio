import { useContext, useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import { profile } from "../data/content";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

const useActiveSection = () => {
  const [active, setActive] = useState("");
  useEffect(() => {
    const els = ["top", ...navItems.map((n) => n.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id === "top" ? "" : e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return active;
};

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (id: string) =>
    `text-sm font-medium transition-colors ${
      active === id
        ? "text-emerald-600 dark:text-emerald-400"
        : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open
          ? "border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-mono text-sm font-semibold text-zinc-900 dark:text-white">
          <span className="text-emerald-600 dark:text-emerald-400">~/</span>
          {profile.firstName.toLowerCase()}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={linkClass(n.id)} aria-current={active === n.id ? "true" : undefined}>
              {n.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="rounded-lg p-2 text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-lg p-2 text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-zinc-200 px-4 pb-4 dark:border-zinc-800 md:hidden">
          {navItems.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className={`block py-3 ${linkClass(n.id)}`}>
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
