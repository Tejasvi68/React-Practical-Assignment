
function ArrayCopy() {
  // Part 1: Copy using the spread operator
  const a = [10, 20, 30];
  const b = [...a];

  b.push(40);

  console.log("Spread - Original array a:", a);
  console.log("Spread - Copied array b:", b);
  console.log("Are a and b the same array?", a === b);

  // Part 2: Copy using plain assignment
  const x = [10, 20, 30];
  const y = x;

  y.push(40);

  console.log("Assignment - Original array x:", x);
  console.log("Assignment - Variable y:", y);
  console.log("Are x and y the same array?", x === y);

  return (
    <div>
      <h3>Question 24: Array Copy vs Assignment</h3>

      <h4>Using Spread Operator</h4>
      <p>Original array a: {a.join(", ")}</p>
      <p>Copied array b: {b.join(", ")}</p>
      <p>Same array reference: {String(a === b)}</p>

      <h4>Using Plain Assignment</h4>
      <p>Original array x: {x.join(", ")}</p>
      <p>Variable y: {y.join(", ")}</p>
      <p>Same array reference: {String(x === y)}</p>
    </div>
  );
}

export default ArrayCopy;


//The spread operator (...) creates a new array containing the elements of the original array. 
// Therefore, modifying the copied array does not change the original array. 
// In contrast, plain assignment (let b = a) copies the array reference rather than creating a new array. 
// Both variables refer to the same array, so changes through either variable affect the same data.