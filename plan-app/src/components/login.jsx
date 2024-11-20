import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const MyPopup = () => (
  <Popup trigger={<button>Get started</button>} position="right center">
    <div className="login">
      <p className="close-btn">X</p>
      <form action="">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
      </form>
      <div>
        <p className="log-btn">LOGIN</p>
      </div>
      <div className="regis-sec">
        <p className="dnt">Don't have an account? </p>
        <p className="sign"> Sign up</p>
      </div>
    </div>
  </Popup>
);

export default MyPopup;
