import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;

//1. The Virtual DOM is a lightweight representation of the user interface used by React.
//2. The real DOM contains the actual HTML elements displayed in the browser.
//3. React compares the new UI with the previous UI to identify the required changes.
//4. This process of comparing and updating is called reconciliation.
//5. In the counter example, React updates the displayed number without reloading the whole page.