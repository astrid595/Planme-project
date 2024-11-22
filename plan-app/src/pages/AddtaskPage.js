import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styleadd.css";
import Phone from "../components/phone";
import back from "../media/back.png";
import AddTask from "../components/addTask";

function List() {
  const navigate = useNavigate();
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
        <div className="title-list">
          <p>To do list</p>
        </div>
      </div>

      <AddTask />

      <div className="add-sec">
        <p className="add-list">+</p>
      </div>
    </div>
  );
}

export default List;
