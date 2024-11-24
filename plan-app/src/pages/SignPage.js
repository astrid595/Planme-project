import React, { useState } from "react";
import "../styles/styleSign.css";
import Phone from "../components/phone";
import back from "../media/back.png";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios for API requests

function SignPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    birthdate: "",
    phone: "",
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/register", formData);
      alert(response.data.message); // Notify the user
      navigate("/"); // Redirect to the home page after successful registration
    } catch (error) {
      console.error("Error during registration:", error);
      alert(error.response?.data?.error || "An error occurred");
    }
  };

  const toggleBack = () => {
    navigate("/");
  };

  return (
    <div className="screen">
      <Phone />

      <div className="back-sec">
        <button className="btn-back" onClick={toggleBack}>
          <img src={back} alt="" className="btn-back" />
        </button>

        <p className="sign-title">Create an account</p>
      </div>

      <div>
        <form className="sign-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="sign-input"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="birthdate"
            placeholder="DD/MM/YYYY"
            className="sign-input"
            value={formData.birthdate}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="sign-input"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="sign-input"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="sign-input"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit" className="sign-btn">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignPage;
