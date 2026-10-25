function Header() {
  return <h2>My Website</h2>;
}

function Content() {
  return <p>Welcome to my website!</p>;
}

function Footer() {
  return <p>Copyright 2026</p>;
}

function ComponentsDemo() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

//A Single Page Application (SPA) is a web application that loads one HTML page and updates its content dynamically without reloading the entire page for every interaction.

//The single HTML page in your Vite project is index.html in the project root, outside the src folder. React renders your App component into that page through src/main.jsx.
export default ComponentsDemo;