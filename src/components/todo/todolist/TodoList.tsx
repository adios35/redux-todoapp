import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BiTrash } from "react-icons/bi";
import { deleteTodo } from "../../../app/features/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todo);
  return (
    <div className="todos">
      <ul className="w-full divide-y-2">
        {todos.todos?.map((item) => {
          return (
            <li
              className="flex justify-between items-end  py-[4px]"
              key={item.id}
            >
              <span>{item.todo}</span>
              <button
                onClick={() => dispatch(deleteTodo(item.id))}
                className="btn btn-sm btn-error text-white"
              >
                <BiTrash />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
