import React from "react";
import "../styles/styleW.css";
import user from "../media/user.png";

const Menu = () => {
  return (
    <div className="weather-row">
      <div>
        <p>Weather</p>
        <p className="temp">23℃</p>
        <p>Location</p>
        <p className="city">Sydney</p>
      </div>

      <div className="right">
        <p>Sunny</p>
        <img src={user} alt="" className="weather-img" />
        <p>Mood</p>
        <p className="mood">Outdoors</p>
      </div>
    </div>
  );
};

export default Menu;
