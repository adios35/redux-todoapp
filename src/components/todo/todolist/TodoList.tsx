import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BiTrash, BiEdit } from "react-icons/bi";
import {
  deleteTodo,
  editTodo,
  toggleComplete,
} from "../../../app/features/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todo);

  return (
    <div className="todos">
      <ul className="w-full divide-y-2">
        {todos?.todos?.map((item) => {
          return (
            <li
              onClick={() => dispatch(toggleComplete(item.id))}
              className={`flex justify-between items-end  py-[4px] ${
                item.completed && "line-through"
              }`}
              key={item.id}
            >
              <span>{item.todo}</span>
              <div className="action flex gap-2">
                <button
                  onClick={() =>
                    dispatch(editTodo({ id: item.id, todo: item.todo }))
                  }
                  className="btn btn-sm btn-secondary text-white"
                >
                  <BiEdit />
                </button>

                <button
                  onClick={() => dispatch(deleteTodo(item.id))}
                  className="btn btn-sm btn-error text-white"
                >
                  <BiTrash />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
