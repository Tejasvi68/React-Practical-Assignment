function ScopeExample() {
  if (true) {
    var x = 10;
    let y = 20;

    console.log("Inside block - x:", x);
    console.log("Inside block - y:", y);
  }

  console.log("Outside block - x:", x);

  // console.log("Outside block - y:", y);
  // ReferenceError: y is not defined

  return (
    <div>
      <h3>Question 8: Scope Example</h3>
      <p>var x = 10: Accessible outside the if block.</p>
      <p>let y = 20: Accessible only inside the if block.</p>
      <p>Check the browser console for the results.</p>
    </div>
  );
}

export default ScopeExample;


//Variables declared with var have function scope, so x can be accessed outside the if block. 
// Variables declared with let have block scope, so y cannot be accessed outside the block where it was declared.