import React, { useState, useEffect } from "react";
import "../styles/styleD.css";
import Menu from "../components/menu";
import Phone from "../components/phone";
import Topsec from "../components/topsec";
import Search from "../components/search";
import Cards from "../components/cards";
import Date from "../components/date";
import Add from "../components/addsec";
import Weather from "../components/weatherInfo";
import { TodayDetails } from "../mockAPI";

function Dashboard() {
  return (
    <div className="screen">
      <Phone />

      <Topsec />

      <Menu />

      <Date />

      <Weather />

      <Search />

      <div className="sugg-task">
        <p>Suggested tasks</p>
      </div>

      {TodayDetails.map((item) => (
        <Cards
          action={item.activity}
          desc={item.description}
          time={item.time}
        />
      ))}

      <Add />
    </div>
  );
}

export default Dashboard;
