function PopExample() {
  const fruits = ["apple", "banana", "mango"];

  const removedFruit = fruits.pop();

  console.log("Removed fruit:", removedFruit);
  console.log("Updated array:", fruits);

  return (
    <div>
      <h3>Question 11: Pop Method</h3>
      <p>Removed fruit: {removedFruit}</p>
      <p>Updated array: {fruits.join(", ")}</p>
    </div>
  );
}

export default PopExample;