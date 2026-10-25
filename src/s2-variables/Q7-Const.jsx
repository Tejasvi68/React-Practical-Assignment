function ConstExample() {
  const a = 10;

  console.log("Initial value:", a);

  // Error 1: Reassignment is not allowed
  // a = 20;
  // TypeError: Assignment to constant variable.

  // Error 2: Redeclaration is not allowed
  // const a = 30;
  // SyntaxError: Identifier 'a' has already been declared

  return (
    <div>
      <h3>Question 7: const Example</h3>
      <p>Initial value: {a}</p>
      <p>Reassignment and redeclaration are not allowed.</p>
    </div>
  );
}

export default ConstExample;