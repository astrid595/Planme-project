import React from "react";
import "../styles/styleTop.css";
import user from "../media/user.png";
import { useNavigate } from "react-router-dom";

const Menu = ({}) => {
  const navigate = useNavigate();
  const toggleBack = () => {
    navigate("/");
  };
  return (
    <div className="top-sec">
      <button className="back-btn" onClick={toggleBack}>
        <img src={user} alt="" className="top-menu" />
      </button>
      <p className="welcome">Welcome back, Anna</p>
    </div>
  );
};

export default Menu;
