
function FilterUsers() {
  const users = [
    { name: "Mohan", age: 17 },
    { name: "Rohan", age: 21 },
    { name: "Sohan", age: 16 },
    { name: "Tejasvi", age: 22 },
    { name: "Priya", age: 18 }
  ];

  const eligibleUsers = users.filter((user) => user.age >= 18);

  console.log("Original users:", users);
  console.log("Users aged 18 or above:", eligibleUsers);

  return (
    <div>
      <h3>Question 16: Filter Adult Users</h3>

      <h4>Original Users:</h4>
      <ul>
        {users.map((user) => (
          <li key={user.name}>
            {user.name} - {user.age} years
          </li>
        ))}
      </ul>

      <h4>Users aged 18 or above:</h4>
      <ul>
        {eligibleUsers.map((user) => (
          <li key={user.name}>
            {user.name} - {user.age} years
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterUsers;
