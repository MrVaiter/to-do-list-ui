import React, { useState } from "react";
import "./NewTask.css";

let NewTask = ({ addNewTask }) => {
  const [newTask, setNewTask] = useState("");

  return (
    <div className="NewTask">
      <input
        placeholder="New task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        onClick={() => {
          addNewTask(newTask);
          setNewTask("");
        }}
      >
        +
      </button>
    </div>
  );
};

export default NewTask;
