import { createContext, useContext } from "react";

// 1. Create Context
const UserContext = createContext();

// GrandChild Component
function GrandChild() {
  // Read username directly from Context
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
      <h3>Parent Component</h3>
      <Child />
    </div>
  );
}

// Main Component
function ContextWithoutProps() {
  const username = "Tejasvi";

  return (
    <UserContext.Provider value={username}>
      <div>
        <h3>Question 36: Context Without Props</h3>
        <Parent />
      </div>
    </UserContext.Provider>
  );
}

export default ContextWithoutProps;