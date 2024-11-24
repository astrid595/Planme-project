import React, { useContext } from "react";
import "../styles/styleD.css";
import Menu from "../components/menu";
import Phone from "../components/phone";
import Topsec from "../components/topsec";
import Search from "../components/search";
import Cards from "../components/cards";
import Date from "../components/date";
import Add from "../components/addsec";
import Weather from "../components/weatherInfo";
import { TaskContext } from "../components/TaskContext";

function Dashboard() {
  const { selectedTasks } = useContext(TaskContext); // Access tasks from TaskContext

  return (
    <div className="screen-dash">
      <Phone />

      <Topsec />

      <Menu />

      <Date />

      <Weather />

      <Search />

      <div className="sugg-task">
        <p>Suggested tasks</p>
      </div>

      {/* Render tasks from TaskContext */}
      {selectedTasks.length === 0 ? (
        <p className="no-tasks">No tasks selected yet!</p>
      ) : (
        selectedTasks.map((item) => (
          <Cards
            key={item.id}
            id={item.id}
            action={item.activity_name}
            desc={item.activity_description}
            time={item.activity_length}
          />
        ))
      )}

      <Add />
    </div>
  );
}

export default Dashboard;
