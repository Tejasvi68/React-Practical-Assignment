
function SpreadArrays() {
  const arr1 = [1, 2];
  const arr2 = [3, 4];

  // Merge both arrays using the spread operator
  const mergedArray = [...arr1, ...arr2];

  console.log("First array:", arr1);
  console.log("Second array:", arr2);
  console.log("Merged array:", mergedArray);

  return (
    <div>
      <h3>Question 22: Spread Operator</h3>

      <p>First array: {arr1.join(", ")}</p>
      <p>Second array: {arr2.join(", ")}</p>
      <p>Merged array: {mergedArray.join(", ")}</p>
    </div>
  );
}

export default SpreadArrays;
