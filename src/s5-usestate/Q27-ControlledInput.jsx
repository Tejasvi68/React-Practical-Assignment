
import { useState } from "react";

function ControlledInput() {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <h3>Question 27: Controlled Input</h3>

      <label htmlFor="userText">Enter some text: </label>

      <input
        id="userText"
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />

      <p>You typed: {text}</p>
    </div>
  );
}

export default ControlledInput;
