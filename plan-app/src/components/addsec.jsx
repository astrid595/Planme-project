import React from "react";
import "../styles/styleAT.css";
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();
  const toggleAdd = () => {
    navigate("/ListPage");
  };
  return (
    <button className="add" onClick={toggleAdd}>
      <p className="add-text">Add task</p>
      <button className="add-btn">+</button>
    </button>
  );
}

export default Add;
