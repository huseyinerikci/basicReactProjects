import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { initialTask } from "../../utils/constants";

const crudSlice = createSlice({
  name: "crud",
  initialState: { tasks: initialTask },
  reducers: {
    addTask: (state, action) => {
      action.payload.id = v4();
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      //id sini aldığımız elemanın sırasını bul
      const i = state.tasks.findIndex((i) => i.id === action.payload);
      state.tasks.splice(i, 1);
    },
    updateTask: (state, action) => {
      const i = state.tasks.findIndex((i) => i.id === action.payload.id);

      state.tasks.splice(i, 1, action.payload);
    },
  },
});

export const { addTask, deleteTask, updateTask } = crudSlice.actions;
export default crudSlice.reducer;
