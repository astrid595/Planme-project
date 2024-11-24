import React, { useContext } from "react";
import "../styles/styleTop.css";
import userPhoto from "../media/user.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const Menu = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const toggleBack = () => {
    navigate("/");
  };
  return (
    <div className="top-sec">
      <button className="btn-home" onClick={toggleBack}>
        <img src={userPhoto} alt="" className="top-menu" />
      </button>
      <p className="welcome">Welcome back, {user ? user.name : "Guest"}</p>
    </div>
  );
};

export default Menu;
