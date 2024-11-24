import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styleT.css";
import Phone from "../components/phone";
import back from "../media/back.png";
import Tasks from "../components/tasks";
import axios from "axios";
import { UserContext } from "../components/UserContext";
import { TaskContext } from "../components/TaskContext";

function List() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext); // Access logged-in user context
  const { addTask, selectedTasks, setSelectedTasks } = useContext(TaskContext); // Access selected tasks context
  const [tasks, setTasks] = useState([]); // State to store fetched activities
  const [error, setError] = useState(null); // State for error handling

  // Fetch activities related to the user
  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:4000/api/activities/${user.userId}`)
        .then((response) => {
          setTasks(response.data); // Update tasks state with activities from the database
        })
        .catch((err) => {
          console.error("Error fetching tasks:", err);
          setError("Failed to load tasks.");
        });
    }
  }, [user]);

  const toggleBack = () => {
    navigate("/DashboardPage");
  };

  const toggleAdd = () => {
    navigate("/TaskPage");
  };

  const handleTaskClick = (task) => {
    console.log(task)
    const taskExists = selectedTasks.some((selectedTask) => selectedTask.id === task.id);
  
    if (taskExists) {
      // If the task exists, remove it from the list
      setSelectedTasks((prevTasks) =>
        prevTasks.filter((selectedTask) => selectedTask.id !== task.id)
      );
    } else {
      // If the task doesn't exist, add it to the list
      addTask(task);
    }
  };

  return (
    <div className="screenW">
      <Phone />

      <div className="back-sec">
        <button className="btn-back" onClick={toggleBack}>
          <img src={back} alt="" className="btn-back" />
        </button>
        <div className="week-title">
          <p>To do list</p>
        </div>
      </div>

      {error && <p className="error-message">{error}</p>}
      {tasks.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            console.log("fui clicdado")
            handleTaskClick(item)
          }} // Apply onClick directly to the wrapper
          className="task-container"
        >
          <Tasks
            desc={item.activity_description}
            time={item.activity_length}
            action={item.activity_name}
          />
        </div>
      ))}

      <div className="add-sec">
        <p className="add-list" onClick={toggleAdd}>
          +
        </p>
      </div>

      <div className="selected-tasks">
        <h3>Selected Tasks:</h3>
        {selectedTasks.map((task, index) => (
          <p key={index}>{task.activity_name}</p> // Display selected task names
        ))}
      </div>
    </div>
  );
}

export default List;
