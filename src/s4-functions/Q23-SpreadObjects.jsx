
function SpreadObjects() {
  const obj = {
    name: "Mohan",
    age: 20
  };

  // Copy obj and add a new property
  const newObj = {
    ...obj,
    city: "Vadodara"
  };

  console.log("Original object:", obj);
  console.log("New object:", newObj);

  // Confirm the original object is unchanged
  console.log("Is original object unchanged?", !("city" in obj));

  return (
    <div>
      <h3>Question 23: Spread Operator with Objects</h3>

      <h4>Original Object:</h4>
      <p>Name: {obj.name}</p>
      <p>Age: {obj.age}</p>

      <h4>New Object:</h4>
      <p>Name: {newObj.name}</p>
      <p>Age: {newObj.age}</p>
      <p>City: {newObj.city}</p>

      <p>Original object unchanged: {String(!("city" in obj))}</p>
    </div>
  );
}

export default SpreadObjects;
