import { useState } from "react";

// Child Component
function ChildCounter({ count, increaseCount }) {
  return (
    <div>
      <h3>Child Component</h3>

      <p>Count received from Parent: {count}</p>

      <button onClick={increaseCount}>
        Increase Parent Count
      </button>
    </div>
  );
}

// Parent Component
function ParentChildCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h3>Question 33: Parent and Child Counter</h3>

      <h4>Parent Count: {count}</h4>

      <ChildCounter
        count={count}
        increaseCount={increaseCount}
      />
    </div>
  );
}

export default ParentChildCounter;