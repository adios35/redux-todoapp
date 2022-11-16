import { createSlice, nanoid } from "@reduxjs/toolkit";
let items = JSON.parse(sessionStorage.getItem("todos")!);
let initialState: any = {
  todos: items,
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.todos = [...state.todos, action.payload];
        console.log(items);

        sessionStorage.setItem(
          "todos",
          JSON.stringify(state.todos.map((item) => item))
        );
      },
      prepare(todo): any {
        return {
          payload: {
            todo,
            completed: false,
            id: nanoid(),
          },
        };
      },
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);

      sessionStorage.setItem(
        "todos",
        JSON.stringify(state.todos.map((item) => item))
      );
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
