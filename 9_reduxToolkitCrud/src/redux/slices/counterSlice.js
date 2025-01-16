import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 1 },
  reducers: {
    increase: (state) => {
      state.count++;
    },
    decrease: (state) => {
      state.count--;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { increase, decrease, setCount } = counterSlice.actions;

export default counterSlice.reducer;
