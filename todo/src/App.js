import React, { useState } from "react";
import Input from "./components/Input";
import './App.module.css';
import List from "./components/List";

function App() {
  const [tasks, setTasks] = useState([]); 
  const TaskHandler = (task) => {
    if (task.task.trim().length === 0) return;
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  }

  const deleteHandler = (task) => {
    setTasks((prevTasks) => {
      prevTasks = prevTasks.filter((item) => item.key !== task.key);
      return prevTasks;
    })
  }

  const editHandler = (task, inputValue) => {
    setTasks((prevTasks) => {
      prevTasks.forEach((item) => {
        if (item.key === task.key) item.task = inputValue;
      })
      return prevTasks;
    })
  };
  
  return (
    <>
      <h1>Welcome, To Todo List</h1>
      <Input onAddTask={ TaskHandler } />
      <List list={tasks} deleteItem={deleteHandler} editItem={ editHandler } />
    </>
  );
}

export default App;
