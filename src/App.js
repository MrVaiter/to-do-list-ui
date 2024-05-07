import "./App.css";
import TaskList from "./components/task-list/TaskList";

let App = () => {
  return (
    <>
      <header>
        <h1>To-Do List</h1>
      </header>
      <body>
        <TaskList></TaskList>
      </body>
    </>
  );
};

export default App;
