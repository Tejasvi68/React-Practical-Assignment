import { createContext, useContext, useState } from "react";

// 1. Create Theme Context
const ThemeContext = createContext();

// 2. Header Component
function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#f0f0f0" : "#222222",
        color: theme === "light" ? "#222222" : "#ffffff",
        padding: "20px",
        marginBottom: "10px",
      }}
    >
      <h2>Header Component</h2>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

// 3. Content Component
function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#222222" : "#ffffff",
        padding: "20px",
        marginBottom: "10px",
      }}
    >
      <h3>Content Component</h3>
      <p>The theme changes in this component too!</p>
    </div>
  );
}

// 4. Main Component
function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  }

  // Context contains both the current theme and toggle function
  const contextValue = {
    theme: theme,
    toggleTheme: toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div style={{ padding: "20px" }}>
        <h2>Question 37: Theme Switcher</h2>

        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>

        <Header />
        <Content />
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeSwitcher;