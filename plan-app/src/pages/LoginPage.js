import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/stylelog.css";
import Phone from "../components/phone";
import Logo from "../media/logob.png";

function Login() {

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
        <form action="" className="form-login">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
        </form>
        <NavLink className="navlog" to="/DashboardPage">
          <p className="log-btn">LOGIN</p>
        </NavLink>
        <div className="regis-sec"></div>
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
          {" "}
          Sign up
        </NavLink>
      </div>
    </div>
  );
}

export default Login;
