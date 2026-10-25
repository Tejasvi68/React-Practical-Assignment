import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

// Home Page
function Home() {
  return (
    <div>
      <h3>Home Page</h3>
      <p>Welcome to our website!</p>
      <p>Try visiting /user/101 or /user/202.</p>
    </div>
  );
}

// Dynamic User Page
function User() {
  const { id } = useParams();

  return (
    <div>
      <h3>User Details</h3>
      <p>User ID: {id}</p>
    </div>
  );
}

// 404 Page
function NotFound() {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
}

// Main Component
function DynamicRoutesDemo() {
  return (
    <BrowserRouter>
      <div>
        <h2>Question 41: Dynamic Routes</h2>

        <nav style={{ display: "flex", gap: "15px" }}>
          <Link to="/">Home</Link>
          <Link to="/user/101">User 101</Link>
          <Link to="/user/202">User 202</Link>
          <Link to="/unknown-page">Test 404</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default DynamicRoutesDemo;