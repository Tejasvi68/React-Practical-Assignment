import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Home Page
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home Page!</p>
    </div>
  );
}

// About Page
function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This page tells you about our website.</p>
    </div>
  );
}

// Contact Page
function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>Contact us at example@gmail.com.</p>
    </div>
  );
}

// Main Routing Component
function RoutingDemo() {
  return (
    <BrowserRouter>
      <div>
        <h2>Question 39: React Router</h2>

        {/* Navigation Links */}
        <nav>
          <Link to="/">Home</Link>{" | "}
          <Link to="/about">About</Link>{" | "}
          <Link to="/contact">Contact</Link>
        </nav>

        <hr />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default RoutingDemo;