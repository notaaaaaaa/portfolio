import { createContext, useState, useEffect, useContext } from "react";

/**
 * ThemeContext - Manages light/dark theme state across the application
 * Features:
 * - Light/Dark mode toggle
 * - localStorage persistence
 * - Bootstrap-compatible implementation using data-theme attribute
 */

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  // Update document attribute and localStorage when theme changes
  useEffect(() => {
    // Set data-theme attribute on HTML element for Bootstrap compatibility
    document.documentElement.setAttribute("data-theme", theme);

    // Persist theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  /**
   * Toggle between light and dark themes
   */
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

/**
 * Custom hook to access theme context
 * @throws {Error} if used outside ThemeProvider
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeContext;
