import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styleT.css";
import Phone from "../components/phone";
import back from "../media/back.png";
import Tasks from "../components/tasks";
import { TaskContext } from "../components/TaskContext"; // Import TaskContext

function Today() {
  const navigate = useNavigate();
  const { todayTasks } = useContext(TaskContext); // Access todayTasks from TaskContext

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
        <div className="today-title">
          <p>Today</p>
        </div>
      </div>

      {/* Render tasks from the todayTasks list */}
      {todayTasks.length === 0 ? (
        <p className="no-tasks">No tasks for today.</p>
      ) : (
        todayTasks.map((item) => (
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

export default Today;
