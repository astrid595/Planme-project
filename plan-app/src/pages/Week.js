import React from "react";
import "../styles/styleT.css";
import Phone from "../components/phone";
import back from "../media/back.png";
import Tasks from "../components/tasks";
import { WeekDetails } from "../mockWeek";
import { useNavigate } from "react-router-dom";

function Week() {
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
        <div className="week-title">
          <p>Week</p>
        </div>
      </div>

      {WeekDetails.map((item) => (
        <Tasks desc={item.description} />
      ))}
    </div>
  );
}

export default Week;
