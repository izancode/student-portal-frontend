import { configureStore } from "@reduxjs/toolkit";
import studentUserSlice from "../Slice/studentUserSlice";
import facultyUserSlice from "../Slice/facultyUserSlice";

export const store = configureStore({
  reducer: {
    student: studentUserSlice,
    faculty: facultyUserSlice,
  },
});
