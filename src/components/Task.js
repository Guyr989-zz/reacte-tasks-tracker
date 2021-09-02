import React from "react";
import { FaTimes } from "react-icons/fa";
function Task({ task, onDelete, toggleComplete }) {
  return (
    <div
      className={`task ${task.done ? "reminder" : ""} `}
      onDoubleClick={() => {
        toggleComplete(task.id);
      }}
    >
      <h3>
        {task.text} <FaTimes onClick={() => onDelete(task.id)} style={{ color: "red", cursor: "pointer" }} />
      </h3>
    </div>
  );
}

export default Task;
