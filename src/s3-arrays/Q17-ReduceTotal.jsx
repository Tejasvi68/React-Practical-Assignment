
function ReduceTotal() {
  const numbers = [5, 10, 15, 20];

  const total = numbers.reduce((sum, num) => {
    return sum + num;
  }, 0);

  console.log("Original array:", numbers);
  console.log("Total:", total);

  return (
    <div>
      <h3>Question 17: Reduce Total</h3>

      <p>Numbers: {numbers.join(", ")}</p>

      <p>Total: {total}</p>
    </div>
  );
}

export default ReduceTotal;
