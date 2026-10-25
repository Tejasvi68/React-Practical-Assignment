function FruitsExample() {
  const fruits = ["apple", "banana"];

  console.log("Original array:", fruits);

  fruits.push("mango");
  console.log("After push:", fruits);


  return (
    <div>
      <h3>Question 10: Array Methods</h3>
      <p>Original array: apple, banana</p>
      <p>After push: apple, banana, mango</p>
      
    </div>
  );
}

export default FruitsExample;