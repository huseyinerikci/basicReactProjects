import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import modalReducer from "./modalSlice";
import todoReducer from "./todoSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    todos: todoReducer,
  },
});

export default store;
