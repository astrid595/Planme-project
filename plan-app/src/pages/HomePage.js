import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/styleh.css";
import Phone from "../components/phone";
import Logo from "../media/logob.png";
import intro from "../media/intro.png";
import LoginPopup from "../components/LoginPopup";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [loginPopupOpen, setLoginPopupOpen] = useState(false);

  return loginPopupOpen ? (
    <LoginPopup
      open={loginPopupOpen}
      onClose={() => setLoginPopupOpen(false)}
    />
  ) : (
    <div className="screen">
      <Phone />
      <div className="images">
        <img src={Logo} alt="" className="logo" />
        <img src={intro} alt="" className="intro" />
      </div>

      <div>
        <p className="slogan">Let's plan your week</p>
      </div>

      <div>
        <button
          className="start"
          onClick={() => setLoginPopupOpen(!loginPopupOpen)}
        >
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
