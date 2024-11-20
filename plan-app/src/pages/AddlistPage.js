import React from "react";
import "../styles/styleadd.css";
import Phone from "../components/phone";
import back from "../media/back.png";
// import Tasks from "../components/tasks";
// import { ListDetails } from "../mockList";
// import AddTask from "../components/addTask";
import ConfirmAct from "../components/confirmAct";

function List() {
  return (
    <div className="screenW">
      <Phone />

      <div className="back-sec">
        <img src={back} alt="" className="back-btn" />
        <div className="title-list">
          <p>To do list</p>
        </div>
      </div>

      <ConfirmAct />

      <div className="add-sec">
        <p className="add-list">+</p>
      </div>
    </div>
  );
}

export default List;
