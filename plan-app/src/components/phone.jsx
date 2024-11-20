import React from "react";
import "../styles/styles.css";
import internet from "../media/internet.png";
import signal from "../media/signal.png";
import bat from "../media/half-battery.png";

const Phone = () => {
  return (
    <div className="phone">
      <p>9:41</p>
      <div className="icons-sec">
        <img src={signal} alt="" className="icons" />
        <img src={internet} alt="" className="icons" />
        <img src={bat} alt="" className="icons" />
      </div>
    </div>
  );
};

export default Phone;
