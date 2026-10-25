function LetExample() {
  let a = 10;
  console.log("Initial value:", a);

  // This line throws an error because let cannot be redeclared
  // Uncaught SyntaxError: Identifier 'a' has already been declared
  // let a = 30;

  a = 20;
  console.log("After reassignment:", a);

  return (
    <div>
      <h3>Question 6: let Example</h3>
      <p>Initial value: 10</p>
      <p>After reassignment: 20</p>
      <p>Redeclaration of let causes an error.</p>
    </div>
  );
}

export default LetExample;