import React from "react";
import AddTodo from "./addTodo/AddTodo";
import TodoList from "./todolist/TodoList";

const Todo = () => {
  return (
    <div className="max-w-md mx-auto shadow-md space-y-2 p-3 mt-10 rounded-md">
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Todo;
