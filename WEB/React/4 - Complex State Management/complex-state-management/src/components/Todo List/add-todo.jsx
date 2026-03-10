import React, { useState } from "react";

const AddTodo = ({ onTodoAdd }) => {
  const [title, setTitle] = useState("");

  const handelClick = () => {
    onTodoAdd(title);
    setTitle("");
  };

  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button onClick={handelClick}>Add</button>
    </>
  );
};

export default AddTodo;
