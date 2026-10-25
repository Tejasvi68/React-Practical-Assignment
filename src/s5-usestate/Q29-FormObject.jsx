
import { useState } from "react";

function FormObject() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    alert(`Name: ${formData.name}\nEmail: ${formData.email}`);
  }

  return (
    <div>
      <h3>Question 29: Form Using One State Object</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <br />

        <div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>

      <h4>Live Preview</h4>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
}

export default FormObject;
