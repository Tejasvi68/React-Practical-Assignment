
function MapGreetings() {
  const names = ["Mohan", "Rohan", "Sohan", "Tejasvi"];

  const greetings = names.map((name) => {
    return `Hello, ${name}`;
  });

  console.log("Original names:", names);
  console.log("Greetings:", greetings);

  return (
    <div>
      <h3>Question 14: Map Greetings</h3>

      <p>Original names: {names.join(", ")}</p>

      <h4>Greetings:</h4>
      <ul>
        {greetings.map((greeting, index) => (
          <li key={index}>{greeting}</li>
        ))}
      </ul>
    </div>
  );
}

export default MapGreetings;
