import React, { useState, useContext } from "react";
import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";
import "reactjs-popup/dist/index.css";
import "./LoginPopup.css";
import axios from "axios";
import { UserContext } from "./UserContext";

const LoginPopup = ({ open, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); // Access setUser from context

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/login", {
        email,
        password,
      });

      const { name, userId } = response.data; // Get user details from response
      setUser({ name, userId }); // Update the context with user information

      alert(response.data.message); // Notify the user on success
      navigate("/DashboardPage"); // Redirect to the dashboard
      onClose(); // Close the popup
    } catch (error) {
      console.error("Login error:", error);
      setLoginError(error.response?.data?.error || "An error occurred");
    }
  };

  return (
    <Popup open={open} onClose={onClose} modal>
      <div className="login-popup">
        <div className="login-header">
          <h2>Login</h2>
        </div>
        <div className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button onClick={handleLogin}>LOGIN</button>
          {loginError && <p className="error-message">{loginError}</p>}
          <p className="signup-prompt">
            Don't have an account? <a href="/SignPage">Sign Up</a>
          </p>
        </div>
      </div>
    </Popup>
  );
};

export default LoginPopup;
