import { useRef, useState, useEffect } from "react";

function RenderCount() {
  const renderCount = useRef(0);
  const [count, setCount] = useState(0);

  // Count every committed render
  useEffect(() => {
    renderCount.current += 1;
    console.log("Component rendered:", renderCount.current);
  });

  return (
    <div>
      <h2>Question 47: Count Renders Using useRef</h2>

      <h3>State Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase State
      </button>

      <p>
        Check the browser console to see how many times the component
        has rendered.
      </p>
    </div>
  );
}

export default RenderCount;