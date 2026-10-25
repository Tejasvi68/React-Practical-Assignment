
function UserCard(props) {
  return (
    <div>
      <h3>User Card</h3>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
    </div>
  );
}

function UserCardDemo() {
  return (
    <div>
      <h3>Question 31: UserCard Using Props</h3>

      <UserCard name="Tejasvi" age={21} city="Vadodara" />

      <hr />

      <UserCard name="Mohan" age={22} city="Ahmedabad" />

      <hr />

      <UserCard name="Riya" age={20} city="Surat" />
    </div>
  );
}

export default UserCardDemo;
