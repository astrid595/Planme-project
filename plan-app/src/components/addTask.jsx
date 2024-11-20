import React from "react";
import "../styles/styleadd.css";

const AddTask = () => {
  return (
    <form action="">
      <p className="close-btn">X</p>
      <input type="text" placeholder="Activity" />
      <input type="text" placeholder="Description" />
      <input type="text" placeholder="Time" />
      <div className="confirm-sec">
        <button className="confirm-btn">Confirm Task</button>
      </div>
    </form>
  );
};

export default AddTask;
