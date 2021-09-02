import React from "react";
import Task from "./Task";

function Tasks({ tasks, onDelete, toggleComplete }) {
  return (
    <div>
      {tasks.map((task) => {
        return <Task key={task.id} onDelete={onDelete} toggleComplete={toggleComplete} task={task} />;
      })}
    </div>
  );
}

export default Tasks;
