import { ThemeProvider, useTheme } from "./ThemeContext";

// Header Component
function Header() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#eeeeee" : "#222222",
        color: theme === "light" ? "#222222" : "#ffffff",
        padding: "20px",
        marginTop: "15px",
      }}
    >
      <h3>Header Component</h3>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

// Content Component
function Content() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#222222" : "#ffffff",
        padding: "20px",
        marginTop: "10px",
      }}
    >
      <h3>Content Component</h3>
      <p>The theme changes here too!</p>
    </div>
  );
}

// Component that consumes the Context
function ThemeContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h2>Question 38: Theme Provider</h2>

      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

      <Header />
      <Content />
    </div>
  );
}

// Wrap the content with ThemeProvider
function ThemeProviderDemo() {
  return (
    <ThemeProvider>
      <ThemeContent />
    </ThemeProvider>
  );
}

export default ThemeProviderDemo;