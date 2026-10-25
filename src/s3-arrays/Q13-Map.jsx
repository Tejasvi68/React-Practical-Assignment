function MapExample() {
  const numbers = [1, 2, 3, 4, 5];

  const doubledNumbers = numbers.map((num) => num * 2);

  console.log("Original array:", numbers);
  console.log("Doubled array:", doubledNumbers);

  return (
    <div>
      <h3>Question 13: Map Method</h3>
      <p>Original array: {numbers.join(", ")}</p>
      <p>Doubled array: {doubledNumbers.join(", ")}</p>
    </div>
  );
}

export default MapExample;