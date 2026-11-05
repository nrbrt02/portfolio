import { createContext, useEffect, useState, ReactNode } from "react";

export const ThemeContext = createContext({
  darkMode: true,
  toggleDarkMode: () => {},
});

const readStored = () => {
  try {
    return localStorage.getItem("theme") !== "light";
  } catch {
    return true;
  }
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(readStored);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    try {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode: () => setDarkMode((d) => !d) }}>
      {children}
    </ThemeContext.Provider>
  );
};
