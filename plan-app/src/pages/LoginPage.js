import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/stylelog.css";
import Phone from "../components/phone";
import Logo from "../media/logob.png";
import axios from "axios";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
      const response = await axios.post("http://localhost:4000/api/login", formData);
      alert(response.data.message); // Notify user on success
      navigate("/DashboardPage"); // Redirect to the dashboard
    } catch (error) {
      console.error("Login error:", error);
      setError(error.response?.data?.error || "An error occurred");
    }
  };

  return (
    <div className="screen-two">
      <Phone />

      <div className="images">
        <img src={Logo} alt="" className="logo" />
      </div>

      <div className="for-log">
        <NavLink className="navlog" to="/">
          <p className="close-btn">X</p>
        </NavLink>
        <form className="form-login" onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="login-input"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="login-input"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit" className="log-btn">LOGIN</button>
        </form>
        {error && <p className="error">{error}</p>} {/* Display error message */}
      </div>

            {/* <div>
        <p className="title">Let's plan your week</p>
      </div>

      <div>
        <p className="start">Get started</p>
      </div> */}

      <div className="sign-sec">
        <p className="dnt">Don't have an account? </p>
        <NavLink className="sign" to="/SignPage">
          Sign up
        </NavLink>
      </div>
    </div>
  );
}

export default LoginPage;
