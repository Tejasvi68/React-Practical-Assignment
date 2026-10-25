import useCounter from "./useCounter";
import useToggle from "./useToggle";

// First component
function CounterOne() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h3>Counter One</h3>
      <p>Count: {count}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function ToggleDemo() {
  const [isVisible, toggleVisibility] = useToggle(false);

  return (
    <div>
      <h3>Bonus: useToggle Custom Hook</h3>

      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Message" : "Show Message"}
      </button>

      {isVisible && <p>Hello! The message is visible.</p>}
    </div>
  );
}

// Second component
function CounterTwo() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <h3>Counter Two</h3>
      <p>Count: {count}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// Main component
function CustomHooksDemo() {
  return (
    <div>
      <h2>Question 48: Custom Hooks</h2>

      <CounterOne />

      <hr />

      <CounterTwo />

      <hr />

      <ToggleDemo />
    </div>
  );
}

export default CustomHooksDemo;