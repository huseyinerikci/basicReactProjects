import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { isStatus: false },
  reducers: {
    changeTheme: (state, action) => {
      state.isStatus = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
