import React, { useState } from "react";
import AddTodo from "./add-todo";
import TodoList from "./todo-list";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const todoAdded = (newTodo) => {
    // todos.push(newTodo);   ❌ mutation
    setTodos((prevTodos) => [...prevTodos, newTodo]); // ✅ immutable : create a new array and spread existing values
  };
  return (
    <>
      <AddTodo onTodoAdd={todoAdded}></AddTodo>
      <TodoList todos={todos}></TodoList>  
    </>
  );
};

export default Todos;
