import { useState, useEffect } from "react";

function EffectEveryRender() {
  const [count, setCount] = useState(0);

  // Runs after every render
  useEffect(() => {
    console.log("Component rendered. Count:", count);
  });

  return (
    <div>
      <h2>Question 43: useEffect Without Dependencies</h2>

      <h3>Counter: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>
    </div>
  );
}

export default EffectEveryRender;
