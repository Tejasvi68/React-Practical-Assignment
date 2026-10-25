import { useState, useEffect } from "react";

function EffectDependency() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Count changed:", count);

    // Update the browser tab title
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h2>Question 44: useEffect with [count]</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br />
      <br />

      <label>
        Enter your name:{" "}
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <p>Name: {name}</p>
    </div>
  );
}

export default EffectDependency;