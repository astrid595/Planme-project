import React from "react";
import "../styles/styleAct.css";
import { NavLink } from "react-router-dom";
import tick from "../media/tick.png";

const ConfirmAct = () => {
  return (
    <form action="">
      <NavLink className="navlog" to="/ListPage">
        <p className="close-btn">X</p>
      </NavLink>
      <p className="title-act">"Go swimming"</p>
      <p className="question">You want to do this</p>
      <div className="act-sec">
        <button className="out-btn">Outdoors</button>
        <button className="in-btn">Indoors</button>
      </div>
      <div className="tick-sec">
        <img src={tick} alt="tick" className="tick-btn" />
      </div>
    </form>
  );
};

export default ConfirmAct;
