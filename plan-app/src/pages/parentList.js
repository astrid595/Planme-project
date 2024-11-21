import React, { useState } from "react";
// import AddTask from "../components/addTask";
import { ListDetails } from "../mockList";

const ParentList = () => {
  const [tasks, setTasks] = useState(ListDetails);

  const addNewTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const newTask = {
    id: Math.floor(Math.random() * 10000),
    
  };

  addNewTask(newTask);

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.activity} - {task.description} - {task.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParentList;
