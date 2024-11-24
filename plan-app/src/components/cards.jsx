import React, { useContext } from "react";
import "../styles/styles.css";
import { TaskContext } from "./TaskContext"; // Import TaskContext

const Cards = ({ id, action, desc, time }) => {
  const { addToTodayTasks, addToWeekTasks } = useContext(TaskContext); // Access context methods

  const handleYesClick = () => {
    addToTodayTasks({ id, action, desc, time });
  };

  const handleNoClick = () => {
    addToWeekTasks({ id, action, desc, time });
  };

  return (
    <div className="task">
      <div className="task-info">
        <p className="activity">{action}</p>
        <p className="act-text">{desc}</p>
      </div>

      <div className="act-bottom">
        <p className="time">{time}</p>
        <button className="option" onClick={handleYesClick}>
          Yes
        </button>
        <button className="option" onClick={handleNoClick}>
          No
        </button>
      </div>
    </div>
  );
};

export default Cards;
