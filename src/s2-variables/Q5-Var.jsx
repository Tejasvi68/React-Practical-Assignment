function VarExample() {
  var a = 10;
  console.log("Initial value:", a);

  var a = 30;
  console.log("After redeclaration:", a);

  a = 20;
  console.log("After reassignment:", a);

  return (
    <div>
      <h3>Question 5: var Example</h3>
      <p>Initial value: 10</p>
      <p>After redeclaration: 30</p>
      <p>After reassignment: 20</p>
    </div>
  );
}

export default VarExample;