import React from "react";
import "../styles/styleSign.css";
import Phone from "../components/phone";
import back from "../media/back.png";
import { useNavigate } from "react-router-dom";

function Sign() {
  const navigate = useNavigate();
  const toggleBack = () => {
    navigate("/");
  };
  // const toggleSingUp = () => {};

  return (
    <div className="screen">
      <Phone />

      <div className="back-sec">
        <button className="back-btn" onClick={toggleBack}>
          <img src={back} alt="" className="back-btn" />
        </button>

        <p className="sign-title">Create an account</p>
      </div>

      <div>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="DD/MMM/YYYY" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
        </form>
      </div>

      <div className="sign-sec">
        <p className="sign-btn">SIGN UP</p>{" "}
        {/*button -> onClick={customFunction}*/}
      </div>
    </div>
  );
}

export default Sign;
