import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/styleadd.css";
import axios from "axios";
import { UserContext } from "./UserContext";

const AddTask = () => {
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  const [indoors, setIndoors] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(UserContext); // Access the logged-in user's context

  const handleConfirm = async (event) => {
    event.preventDefault();

    // Ensure all required fields are filled
    if (!activity || !description || !time || !category) {
      setError("Please fill in all the fields.");
      return;
    }

    if (!user) {
      setError("You must be logged in to add a task.");
      return;
    }

    try {
      // Make a POST request to the backend to add the activity
      await axios.post("http://localhost:4000/api/activities", {
        user_id: user.userId, // Add the user ID from context
        activity_name: activity,
        activity_description: description,
        activity_length: time,
        activity_category: category,
        indoors, // true or false
      });

      // Navigate to the ListPage after successfully adding the activity
      navigate("/ListPage");
    } catch (error) {
      console.error("Error adding activity:", error);
      setError("Failed to add activity. Please try again.");
    }
  };

  return (
    <form>
      <NavLink className="navlog" to="/ListPage">
        <p className="close-btn">X</p>
      </NavLink>

      {error && <p className="error-message">{error}</p>} {/* Display errors */}

      <input
        type="text"
        placeholder="Activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        className="type-input"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="type-input"
      />
      <input
        type="text"
        placeholder="Time (e.g., 30 min, 1 hour)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="type-input"
      />
      <input
        type="text"
        placeholder="Category (e.g., Exercise, Study)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="type-input"
      />
      <label>
        <input
          type="checkbox"
          checked={indoors}
          onChange={(e) => setIndoors(e.target.checked)}
        />
        Indoors
      </label>

      <div className="confirm-sec">
        <button className="confirm-btn" onClick={handleConfirm}>
          Confirm Task
        </button>
      </div>
    </form>
  );
};

export default AddTask;
