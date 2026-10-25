import { createContext, useContext } from "react";

// 1. Create Context
const UserContext = createContext();

// GrandChild Component
function GrandChild() {
  // 3. Read the username directly from Context
  const username = useContext(UserContext);

  return (
    <div>
      <h4>GrandChild Component</h4>
      <p>Username: {username}</p>
    </div>
  );
}

// Child Component
function Child() {
  return (
    <div>
      <h3>Child Component</h3>
      <GrandChild />
    </div>
  );
}

// Parent Component
function Parent() {
  return (
    <div>
      <h2>Parent Component</h2>
      <Child />
    </div>
  );
}

// App Component
function UserContextDemo() {
  const username = "Tejasvi";

  return (
    <UserContext.Provider value={username}>
      <div>
        <h3>Question 35: Context API</h3>
        <h3>App Component</h3>

        <Parent />
      </div>
    </UserContext.Provider>
  );
}

export default UserContextDemo;