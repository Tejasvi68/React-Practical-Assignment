function ShiftUnshiftExample() {
  const fruits = ["apple", "banana"];

  console.log("Original array:", fruits);

  // Add kiwi at the beginning
  fruits.unshift("kiwi");
  console.log("After unshift:", fruits);

  // Remove the first item
  const removedFruit = fruits.shift();
  console.log("Removed fruit:", removedFruit);
  console.log("After shift:", fruits);

  return (
    <div>
      <h3>Question 12: Shift and Unshift</h3>
      <p>Original array: apple, banana</p>
      <p>After unshift: {["kiwi", "apple", "banana"].join(", ")}</p>
      <p>Removed fruit: {removedFruit}</p>
      <p>After shift: {fruits.join(", ")}</p>
    </div>
  ); 
}

export default ShiftUnshiftExample;