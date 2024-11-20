import React from "react";
import "../styles/stylesM.css";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  return (
    <div className="menu-sec">
      <button className="menu" onClick={() => navigate("/TodayPage")}>
        Today
      </button>
      <button className="menu" onClick={() => navigate("/WeekPage")}>
        Week
      </button>
      <button className="menu">Forecast</button>
    </div>
  );
}

export default Menu;
