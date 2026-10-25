import { useRef, useEffect } from "react";

function AutoFocus() {
  const inputRef = useRef(null);

  // Automatically focus the input when the component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Focus the input when the button is clicked
  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Question 46: useRef Auto Focus</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
      />

      <button onClick={handleFocus}>
        Focus Input
      </button>
    </div>
  );
}

export default AutoFocus;