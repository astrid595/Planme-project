import React, { useContext } from "react";
import "../styles/styleT.css";
import Phone from "../components/phone";
import back from "../media/back.png";
import Tasks from "../components/tasks";
import { TaskContext } from "../components/TaskContext"; // Import TaskContext
import { useNavigate } from "react-router-dom";

function Week() {
  const navigate = useNavigate();
  const { weekTasks } = useContext(TaskContext); // Access weekTasks from TaskContext

  const toggleBack = () => {
    navigate("/DashboardPage");
  };

  return (
    <div className="screenW">
      <Phone />

      <div className="back-sec">
        <button className="btn-back" onClick={toggleBack}>
          <img src={back} alt="" className="btn-back" />
        </button>
        <div className="week-title">
          <p>Week</p>
        </div>
      </div>

      {/* Render tasks from the weekTasks list */}
      {weekTasks.length === 0 ? (
        <p className="no-tasks">No tasks for this week.</p>
      ) : (
        weekTasks.map((item) => (
          <Tasks
            key={item.id} // Use task ID as the key
            desc={item.desc} // Pass task description
            time={item.time} // Optionally pass time if required
            action={item.action} // Optionally pass action if required
          />
        ))
      )}
    </div>
  );
}

export default Week;
