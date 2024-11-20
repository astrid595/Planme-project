import React from "react";
import "../styles/styleT.css";

const Tasks = ({ action, desc, time }) => {
  return (
    <div className="task-list">
      <p className="selec"></p>
      <p>{desc}</p>
    </div>
  );
};

export default Tasks;
