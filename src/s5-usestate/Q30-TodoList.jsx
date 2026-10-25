
import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(1);

  function handleAdd() {
    if (task.trim() === "") {
      return;
    }

    const newTodo = {
      id: nextId,
      text: task.trim(),
    };

    setTodos([...todos, newTodo]);
    setNextId(nextId + 1);
    setTask("");
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <h3>Question 30: To-Do List</h3>

      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button onClick={() => handleDelete(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && <p>No tasks added yet.</p>}
    </div>
  );
}

export default TodoList;
