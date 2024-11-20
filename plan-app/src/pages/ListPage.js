import React from "react";
import "../styles/styleT.css";
import Phone from "../components/phone";
import back from "../media/back.png";
import Tasks from "../components/tasks";
import { ListDetails } from "../mockList";
import { useNavigate } from "react-router-dom";

function List() {
  const navigate = useNavigate();
  const toggleBack = () => {
    navigate("/DashboardPage");
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

      {ListDetails.map((item) => (
        <Tasks desc={item.description} />
      ))}

      <div className="add-sec">
        <p className="add-list">+</p>
      </div>
    </div>
  );
}

export default List;
