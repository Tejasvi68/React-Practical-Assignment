import { useState, useEffect } from "react";

// Fake API function that returns a Promise
function fetchUsers(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Failed to fetch users!"));
      } else {
        const users = [
          { id: 1, name: "Aarav", email: "aarav@example.com" },
          { id: 2, name: "Diya", email: "diya@example.com" },
          { id: 3, name: "Rohan", email: "rohan@example.com" },
        ];

        resolve(users);
      }
    }, 2000);
  });
}

function FetchUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [shouldFail, setShouldFail] = useState(false);

  useEffect(() => {
    let isActive = true;

    setLoading(true);
    setError("");
    setUsers([]);

    fetchUsers(shouldFail)
      .then((data) => {
        if (isActive) {
          setUsers(data);
        }
      })
      .catch((err) => {
        if (isActive) {
          setError(err.message);
        }
      })
      .finally(() => {
        if (isActive) {
          setLoading(false);
        }
      });

    // Cleanup if the component unmounts or the effect reruns
    return () => {
      isActive = false;
    };
  }, [shouldFail]);

  const toggleOutcome = () => {
    setShouldFail((prev) => !prev);
  };

  return (
    <div>
      <h2>Question 50: Fetch Users with Promises</h2>

      <button onClick={toggleOutcome}>
        Test {shouldFail ? "Success" : "Failure"}
      </button>

      <p>
        Current mode: {shouldFail ? "Failure" : "Success"}
      </p>

      {loading && <p>Loading...</p>}

      {!loading && error && (
        <p style={{ color: "red" }}>
          Error: {error}
        </p>
      )}

      {!loading && !error && (
        <div>
          <h3>User List</h3>

          {users.map((user) => (
            <div key={user.id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FetchUsers;