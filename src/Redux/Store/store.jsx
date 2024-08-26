import { configureStore } from "@reduxjs/toolkit";
import studentUserSlice from "../Slice/studentUserSlice";

export const store = configureStore({
  reducer: {
    student: studentUserSlice,
  },
});
