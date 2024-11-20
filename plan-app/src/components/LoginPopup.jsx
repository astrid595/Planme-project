import React, { useState } from "react";
import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";
import "reactjs-popup/dist/index.css";
import "./LoginPopup.css";

const LoginPopup = ({ open, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "test@example.com" && password === "password") {
      navigate("/dashboard");
    } else {
      setLoginError("Invalid email or password");
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
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </Popup>
  );
};

export default LoginPopup;
