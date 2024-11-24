import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./components/UserContext";
import { TaskProvider } from "./components/TaskContext";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import SignPage from "./pages/SignPage";
import Week from "./pages/Week";
import List from "./pages/ListPage";
import Today from "./pages/Today";
import Task from "./pages/AddtaskPage";
import Add from "./pages/AddlistPage";
import Parent from "./pages/parentList";

export default function App() {
  return (
    <UserProvider>
      <TaskProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SignPage" element={<SignPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/DashboardPage" element={<Dashboard />} />
          <Route path="/TodayPage" element={<Today />} />
          <Route path="/WeekPage" element={<Week />} />
          <Route path="/ListPage" element={<List />} />
          <Route path="/TaskPage" element={<Task />} />
          <Route path="/AddPage" element={<Add />} />
          <Route path="/ParentPage" element={<Parent />} />
        </Routes>
      </TaskProvider>
    </UserProvider>
  );
}
