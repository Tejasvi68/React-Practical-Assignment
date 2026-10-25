import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Home Page
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to our website!</p>
    </div>
  );
}

// About Page
function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>Learn more about us.</p>
    </div>
  );
}

// Contact Page
function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>Email: example@gmail.com</p>
    </div>
  );
}

// Navbar Component
function Navbar() {
  const navStyle = {
    display: "flex",
    gap: "20px",
    padding: "15px",
    backgroundColor: "#222",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <nav style={navStyle}>
      <Link style={linkStyle} to="/">Home</Link>
      <Link style={linkStyle} to="/about">About</Link>
      <Link style={linkStyle} to="/contact">Contact</Link>
    </nav>
  );
}

// Main Component
function NavbarDemo() {
  return (
    <BrowserRouter>
      <div>
        <h2>Question 40: Navbar Using Link</h2>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default NavbarDemo;