import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/styleh.css";
import Phone from "../components/phone";
import Logo from "../media/logob.png";
import intro from "../media/intro.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const toggleLogin = () => {
    navigate("/LoginPage");
  };
  return (
    <div className="screen">
      <Phone />
      <div className="images">
        <img src={Logo} alt="" className="logo" />
        <img src={intro} alt="" className="intro" />
      </div>

      <div>
        <p className="title">Let's plan your week</p>
      </div>

      <div>
        <button className="start" onClick={toggleLogin}>
          Get started
        </button>
      </div>

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

export default Home;
