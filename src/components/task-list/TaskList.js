import "./TaskList.css";
import Task from "../task/Task";
import React, { useState, useEffect } from "react";
import NewTask from "../new-task/NewTask";
import axios from 'axios';

let TaskList = () => {
  const [taskList, changeTaskList] = useState(null);

  useEffect(() => {
    let host = process.env.REACT_APP_API_HOST;
    let port = process.env.REACT_APP_API_PORT;

    axios.get(`http://${host}:${port}/api/v1/getall`)
      .then((response) => response.json())
      .then((taskList) => {
        changeTaskList(taskList);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="TaskList">
      <NewTask
        addNewTask={(newTask) =>
          changeTaskList([
            ...taskList,
            { ID: taskList.length + 1, TaskName: newTask, Status: false },
          ])
        }
      />

      {taskList
        ? taskList.map((task, index) => (
            <Task
              key={task["ID"]}
              taskName={task["TaskName"]}
              state={task["Status"]}
              remove={() => {
                changeTaskList(taskList.filter((_, id) => id !== index));
              }}
              done={() => {
                let newArr = [...taskList];
                newArr[index]["Status"] = !newArr[index]["Status"];
                changeTaskList(newArr);
              }}
            />
          ))
        : "Loading..."}
    </div>
  );
};

export default TaskList;
