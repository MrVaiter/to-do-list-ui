import "./Task.css";

let Task = ({ taskName, done, remove, state }) => {
  return (
    <div className="Task">
      <p style={{ textDecoration: state ? "line-through" : "none" }}>
        {taskName}
      </p>
      <button onClick={done}>✓</button>
      <button onClick={remove}>х</button>
    </div>
  );
};

export default Task;
