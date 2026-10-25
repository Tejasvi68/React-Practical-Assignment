
function FilterNumbers() {
  const numbers = [10, 15, 20, 25, 30];

  const filteredNumbers = numbers.filter((num) => num > 18);

  console.log("Original array:", numbers);
  console.log("Numbers greater than 18:", filteredNumbers);

  return (
    <div>
      <h3>Question 15: Filter Numbers</h3>

      <p>Original array: {numbers.join(", ")}</p>

      <p>Numbers greater than 18: {filteredNumbers.join(", ")}</p>
    </div>
  );
}

export default FilterNumbers;
