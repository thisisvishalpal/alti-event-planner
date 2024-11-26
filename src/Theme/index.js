import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";

// Create the context
const ThemeContext = createContext();

// ThemeProvider Component
export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or use default
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Sync theme changes to localStorage and update body class
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = `app-container ${theme}`; // Set the theme class on the <body>
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// Custom hook to use ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};
