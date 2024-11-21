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
        <form action="" className="sign-form">
          <input type="text" placeholder="Name" className="sign-input"/>
          <input type="text" placeholder="DD/MMM/YYYY" className="sign-input"/>
          <input type="text" placeholder="Phone Number" className="sign-input"/>
          <input type="text" placeholder="Email" className="sign-input"/>
          <input type="text" placeholder="Password" className="sign-input"/>
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
