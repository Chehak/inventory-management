import { configureStore } from "@reduxjs/toolkit";
import fieldsReducer from "./fieldsSlice";

export const store = configureStore({
  reducer: {
    fields: fieldsReducer,
  },
});

export default store;
