import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styleT.css";
import Phone from "../components/phone";
import back from "../media/back.png";
import Tasks from "../components/tasks";
import { TodayDetails } from "../mockAPI";

function Today() {
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
        <div className="today-title">
          <p>Today</p>
        </div>
      </div>

      {TodayDetails.map((item) => (
        <Tasks desc={item.description} />
      ))}
    </div>
  );
}

export default Today;
