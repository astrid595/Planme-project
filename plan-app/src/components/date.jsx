import React from "react";
import "../styles/styles.css";
import { formatedDate, currentDay } from "../components/formattedDate";

const Date = () => {
  return (
    <div className="date-sec">
      <div className="day" id="date">
        <p>{formatedDate()}</p>
      </div>

      <div className="info-current">
        <p className="month" id="hour">
          {currentDay()}
        </p>
      </div>
    </div>
  );
};

export default Date;
