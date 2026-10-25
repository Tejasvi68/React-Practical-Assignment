import { useState, useEffect } from "react";

function MountEffect() {
  const [count, setCount] = useState(0);

  // Runs when the component mounts
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return (
    <div>
      <h2>Question 42: useEffect with Empty Dependency Array</h2>

      <h3>Counter: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>
    </div>
  );
}

export default MountEffect;