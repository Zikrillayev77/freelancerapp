import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState("uz"); // Standart tilni o'zbekchaga o'rnatildi

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const toggleLanguage = () => setLang((prev) => (prev === "uz" ? "ru" : "uz"));

  return (
    <ThemeContext.Provider
      value={{ darkMode, toggleDarkMode, lang, toggleLanguage }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
