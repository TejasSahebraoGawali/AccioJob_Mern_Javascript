import React from "react";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo}</li>
      ))}
    </ul>
  );
};

export default TodoList;
