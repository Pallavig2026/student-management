import React, { useState } from "react";
import Navbar from "./components/Navbar";
import StudentForm from "./components/StudentForm";
import StudentCard from "./components/StudentCard";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <StudentForm addStudent={addStudent} />

        <div className="card-container">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              deleteStudent={deleteStudent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;