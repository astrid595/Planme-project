import React, { createContext, useState } from "react";

// Create the context
export const TaskContext = createContext();

// Create the provider component
export const TaskProvider = ({ children }) => {
  const [selectedTasks, setSelectedTasks] = useState([]); // Store selected tasks
  const [todayTasks, setTodayTasks] = useState([]); // Tasks for today
  const [weekTasks, setWeekTasks] = useState([]); // Tasks for the week

  // Function to add a task to the list
  const addTask = (task) => {
    setSelectedTasks((prevTasks) => [...prevTasks, task]);
  };

  // Function to remove a task from the selectedTasks list
  const removeFromSelectedTasks = (taskId) => {
    setSelectedTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskId)
    );
  };

  // Function to add a task to the today list
  const addToTodayTasks = (task) => {
    setTodayTasks((prevTasks) => [...prevTasks, task]);
    console.log(todayTasks)
    removeFromSelectedTasks(task.id); // Remove from selectedTasks
  };

  // Function to add a task to the week list
  const addToWeekTasks = (task) => {
    setWeekTasks((prevTasks) => [...prevTasks, task]);
    removeFromSelectedTasks(task.id); // Remove from selectedTasks
  };

  return (
    <TaskContext.Provider
      value={{
        selectedTasks,
        setSelectedTasks,
        addTask,
        removeFromSelectedTasks,
        todayTasks,
        addToTodayTasks,
        weekTasks,
        addToWeekTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};