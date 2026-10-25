
import { useState } from "react";

function ShowHide() {
  const [isVisible, setIsVisible] = useState(true);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <h3>Question 28: Show/Hide Toggle</h3>

      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Paragraph" : "Show Paragraph"}
      </button>

      {isVisible && <p>Hello! This paragraph can be shown or hidden.</p>}
    </div>
  );
}

export default ShowHide;
