import React from "react";
import "../styles/styleTask.css";

const Tasks = ({ desc }) => {
  return (
    <div className="list-task">
      <p className="selec"></p>

      <p>{desc}</p>
    </div>
  );
};

export default Tasks;
