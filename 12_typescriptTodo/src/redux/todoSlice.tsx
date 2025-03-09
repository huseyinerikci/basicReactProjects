import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoInitialState, TodoType } from "../types/Types";

const initialState: TodoInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
      state.todos = [action.payload, ...state.todos];
    },
    removeTodo: (state: TodoInitialState, action: PayloadAction<number>) => {
      state.todos = [
        ...state.todos.filter((todo: TodoType) => todo.id !== action.payload),
      ];
    },
    updateTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
      state.todos = [
        ...state.todos.map((todo: TodoType) =>
          todo.id !== action.payload.id ? todo : action.payload
        ),
      ];
    },
  },
});

export const { createTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
