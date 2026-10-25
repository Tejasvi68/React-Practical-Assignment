// GrandChild Component
function GrandChild({ username }) {
  return (
    <div>
      <h4>GrandChild Component</h4>
      <p>Username: {username}</p>
    </div>
  );
}

// Child Component
function Child({ username }) {
  return (
    <div>
      <h3>Child Component</h3>
      <GrandChild username={username} />
    </div>
  );
}

// Parent Component
function Parent({ username }) {
  return (
    <div>
      <h2>Parent Component</h2>
      <Child username={username} />
    </div>
  );
}

// App Component
function PropDrilling() {
  const username = "Tejasvi";

  return (
    <div>
      <h3>Question 34: Prop Drilling</h3>
      <h3>App Component</h3>

      <Parent username={username} />
    </div>
  );
}

export default PropDrilling;

//Prop drilling is the process of passing props through multiple intermediate components to reach a deeply nested child component.

//Its main problem is that intermediate components must pass props they do not need, making the code harder to maintain as the component tree grows.