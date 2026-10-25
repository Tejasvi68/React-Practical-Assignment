import { useState } from "react";

function ChangeHeading() {
  const [heading, setHeading] = useState("Welcome to React!");

  return (
    <div>
      <h2>{heading}</h2>

      <button onClick={() => setHeading("Heading Changed!")}>
        Click Me
      </button>
    </div>
  );
}

//When I click the button, the heading changes without reloading the entire page. React updates the displayed content when the state changes. This demonstrates SPA behaviour because the interface updates dynamically without requesting a new HTML page for this interaction.
export default ChangeHeading;