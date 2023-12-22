import React from "react";

const students = [
  {
    id : 1,
    name : "살생부 명단",
  },
  {
    id : 2,
    name : "전찬용",
  },
  {
    id : 3,
    name : "박진호",
  },
  {
    id : 4,
    name : "신종현",
  },
  {
    id : 5,
    name : "임성훈",
  },
];

function AttendanceBook(props){
  return (
    <ul>
      
      {students.map((student,index) => {
        return <li key={index}>{student.name}</li>;
      })}
      
    </ul>
  );
}
export default AttendanceBook