import React from "react";
import { useState } from "react";
function AddTask({ onAdd }) {
  const [text, setText] = useState("");
  const [complete, setComplete] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("please add text");
      return;
    }

    onAdd({ text, complete });

    setText("");
    setComplete(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="AddTask"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set completed</label>
        <input
          type="checkbox"
          checked={complete}
          onChange={() => {
            setComplete(!complete);
          }}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Save" />
    </form>
  );
}

export default AddTask;
