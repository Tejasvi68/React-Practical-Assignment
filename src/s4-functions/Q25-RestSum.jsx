
function RestSum() {
  // Rest operator collects all arguments into an array
  function sum(...nums) {
    return nums.reduce((total, num) => total + num, 0);
  }

  // Test with three different sets of arguments
  const result1 = sum(2, 4, 5, 6);
  const result2 = sum(10, 20, 30);
  const result3 = sum(1, 2, 3, 4, 5);

  console.log("Sum 1:", result1);
  console.log("Sum 2:", result2);
  console.log("Sum 3:", result3);

  return (
    <div>
      <h3>Question 25: Rest Operator and Reduce</h3>

      <p>sum(2, 4, 5, 6) = {result1}</p>
      <p>sum(10, 20, 30) = {result2}</p>
      <p>sum(1, 2, 3, 4, 5) = {result3}</p>

      <p>
        Rest collects arguments into an array, whereas spread expands
        an array or iterable into individual elements.
      </p>
    </div>
  );
}

export default RestSum;


//Rest collects multiple arguments into a single array, whereas spread expands an array or iterable into individual elements.