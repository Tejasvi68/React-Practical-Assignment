
function AddFunction() {
  // 1. Regular function
  function add(a, b) {
    return a + b;
  }

  // 2. Arrow function
  const addArrow = (a, b) => {
    return a + b;
  };

  // Call both functions
  const result1 = add(10, 20);
  const result2 = addArrow(10, 20);

  console.log("Regular function result:", result1);
  console.log("Arrow function result:", result2);

  return (
    <div>
      <h3>Question 20: Regular Function and Arrow Function</h3>

      <p>Regular function: add(10, 20) = {result1}</p>
      <p>Arrow function: addArrow(10, 20) = {result2}</p>
    </div>
  );
}

export default AddFunction;
