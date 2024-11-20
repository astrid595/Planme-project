import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Dashboard from "./pages/DashboardPage";
import Login from "./pages/LoginPage";
import Sign from "./pages/SignPage";
import Week from "./pages/Week";
import List from "./pages/ListPage";
import Today from "./pages/Today";
import Task from "./pages/AddtaskPage";
import Add from "./pages/AddlistPage";
import Parent from "./pages/parentList";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignPage" element={<Sign />} />
      <Route path="/LoginPage" element={<Login />} />
      <Route path="/DashboardPage" element={<Dashboard />} />
      <Route path="/TodayPage" element={<Today />} />
      <Route path="/WeekPage" element={<Week />} />
      <Route path="/ListPage" element={<List />} />
      <Route path="/TaskPage" element={<Task />} />
      <Route path="/AddPage" element={<Add />} />
      <Route path="/ParentPage" element={<Parent />} />
    </Routes>
  );
}
