import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/styleadd.css";

const AddTask = ({ addNewTask }) => {
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const navigate = useNavigate();

  const handleConfirm = (event) => {
    event.preventDefault();

    // const newTask = {
    //   id: Math.floor(Math.random() * 10000),
    //   activity,
    //   description,
    //   time,
    // };

    // addNewTask(newTask);

    setIsConfirmed(true);

    navigate("/ListPage", { state: { description } });
  };

  return (
    <form action="">
      <NavLink className="navlog" to="/ListPage">
        <p className="close-btn">X</p>
      </NavLink>

      {!isConfirmed && (
        <>
          <input
            type="text"
            placeholder="Activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </>
      )}

      {isConfirmed && (
        <div>
          <p>
            <strong>Confirmed Description:</strong> {description}
          </p>
        </div>
      )}

      <div className="confirm-sec">
        <button className="confirm-btn" onClick={handleConfirm}>
          Confirm Task
        </button>
      </div>
    </form>
  );
};

export default AddTask;
