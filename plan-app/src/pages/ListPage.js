import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styleT.css";
import Phone from "../components/phone";
import back from "../media/back.png";
import Tasks from "../components/tasks";
import { ListDetails } from "../mockList";

function List() {
  const navigate = useNavigate();
  const [listDetails, setListDetails] = useState(ListDetails);

  const toggleBack = () => {
    navigate("/DashboardPage");
  };

  const toggleAdd = () => {
    navigate("/TaskPage");
  };

  const handleTaskClick = (description) => {
    navigate("/TaskDetailsPage", { state: { description } });
  };

  const [tasks, setTasks] = useState(ListDetails);

  const addNewTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="screenW">
      <Phone />

      <div className="back-sec">
        <button className="back-btn" onClick={toggleBack}>
          <img src={back} alt="" className="back-btn" />
        </button>
        <div className="title-list">
          <p>To do list</p>
        </div>
      </div>

      {listDetails.map((item) => (
        <Tasks
          key={item.id}
          desc={item.description}
          onClick={() => handleTaskClick(item.description)}
        />
      ))}

      <div className="add-sec">
        <p className="add-list" onClick={toggleAdd}>
          +
        </p>
      </div>
    </div>
  );
}

export default List;
