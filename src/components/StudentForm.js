import React, { useState } from "react";

function StudentForm({ addStudent }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !student.name ||
      !student.email ||
      !student.phone ||
      !student.course
    ) {
      alert("Please fill all fields");
      return;
    }

    addStudent({
      ...student,
      id: Date.now(),
    });

    setStudent({
      name: "",
      email: "",
      phone: "",
      course: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add Student</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={student.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={student.phone}
        onChange={handleChange}
      />

      <input
        type="text"
        name="course"
        placeholder="Course"
        value={student.course}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;