import { createContext, useContext, useState } from "react";

// STEP 1: CREATE the Context
const ThemeContext = createContext();

// STEP 2: PROVIDE the Context using ThemeProvider
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  }

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// STEP 3: CONSUME the Context using useContext
export function useTheme() {
  return useContext(ThemeContext);
}