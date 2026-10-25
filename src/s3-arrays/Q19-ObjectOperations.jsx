
function ObjectOperations() {
  // 1. Create the student object
  const student = {
    name: "Mohan",
    age: 20,
    city: "Vadodara"
  };

  console.log("Original object:", { ...student });

  // 2. Read values using dot notation and bracket notation
  console.log("Name using dot notation:", student.name);
  console.log("City using bracket notation:", student["city"]);

  // 3. Add a new property
  student.course = "BCA";
  console.log("After adding course:", { ...student });

  // 4. Update age
  student.age = 21;
  console.log("After updating age:", { ...student });

  // 5. Delete city
  delete student.city;
  console.log("After deleting city:", { ...student });

  return (
    <div>
      <h3>Question 19: Object Operations</h3>

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>City: {student.city ?? "Deleted"}</p>

      <p>Open the browser console to see the object after each change.</p>
    </div>
  );
}

export default ObjectOperations;
