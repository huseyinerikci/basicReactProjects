import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    appendTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
  },
});
export const { setTodos, appendTodo } = todoSlice.actions;
export default todoSlice.reducer;
