
function UserCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
    </div>
  );
}

function UserList() {
  const users = [
    { id: 1, name: "Tejasvi", age: 21, city: "Vadodara" },
    { id: 2, name: "Mohan", age: 22, city: "Ahmedabad" },
    { id: 3, name: "Riya", age: 20, city: "Surat" },
    { id: 4, name: "Aarav", age: 23, city: "Rajkot" },
  ];

  return (
    <div>
      <h3>Question 32: User List Using map()</h3>

      {users.map((user) => (
        <div key={user.id}>
          <UserCard
            name={user.name}
            age={user.age}
            city={user.city}
          />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default UserList;
