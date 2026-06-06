import React from "react";

function StudentCard({ student, deleteStudent }) {
  return (
    <div className="card">
      <h3>{student.name}</h3>
      <p>Email: {student.email}</p>
      <p>Phone: {student.phone}</p>
      <p>Course: {student.course}</p>

      <button
        className="delete-btn"
        onClick={() => deleteStudent(student.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default StudentCard;
