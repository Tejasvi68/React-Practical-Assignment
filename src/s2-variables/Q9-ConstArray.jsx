function ConstArrayExample() {
  const fruits = ["Apple", "Banana"];

  console.log("Original array:", fruits);

  // Adding a new value to the array
  fruits.push("Mango");

  console.log("After push:", fruits);

  // Trying to reassign the entire array causes an error
  // fruits = ["Orange", "Grapes"];
  // TypeError: Assignment to constant variable.

  return (
    <div>
      <h3>Question 9: Const Array</h3>

      <p>Original values: Apple, Banana</p>
      <p>After push(): Apple, Banana, Mango</p>

      <p>Adding an item works, but reassigning the array causes an error.</p>
    </div>
  );
}

export default ConstArrayExample;

//The `const` keyword does not allow a variable to be reassigned, but its array contents can be modified. 
// The `push()` method successfully adds a new element to the existing array. 
// However, reassigning the entire array causes a `TypeError`. 
// Thus, `const` prevents reassignment but allows modification of array contents.