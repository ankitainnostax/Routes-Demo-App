import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("https://freetestapi.com/api/v1/students");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const students = await response.json();
        setData(students);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchStudents();
  }, []);

  const seeDetail = (studentId) => {
    window.open(
      `https://freetestapi.com/api/v1/students/${studentId}`,
      "_blank"
    );
  };

  return (
    <div className="flex justify-center items-center p-3">
      <table className="table-auto border-separate border-spacing-2 border border-slate-400">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td>
                <button
                  className="bg-blue-300 p-2 rounded"
                  onClick={() => seeDetail(student.id)}
                >
                  See Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
