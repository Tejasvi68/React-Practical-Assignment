
function IsEven() {
  // Function to check whether a number is even
  function isEven(n) {
    return n % 2 === 0;
  }

  // Test with three values
  const result1 = isEven(4);
  const result2 = isEven(7);
  const result3 = isEven(10);

  console.log("Is 4 even?", result1);
  console.log("Is 7 even?", result2);
  console.log("Is 10 even?", result3);

  return (
    <div>
      <h3>Question 21: Check Even Numbers</h3>

      <p>isEven(4): {String(result1)}</p>
      <p>isEven(7): {String(result2)}</p>
      <p>isEven(10): {String(result3)}</p>
    </div>
  );
}

export default IsEven;
