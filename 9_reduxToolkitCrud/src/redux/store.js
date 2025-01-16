import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import crudReducer from "./slices/crudSlice";
import themeReducer from "./slices/themeSlice";

const store = configureStore({
  reducer: {
    counterReducer,
    crudReducer,
    themeReducer,
  },
});
export default store;
