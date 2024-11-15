import { configureStore } from "@reduxjs/toolkit";

import { facultyUser, studentUser } from "../Slice/registerationSlice";
import { login, otp, logout } from "../Slice/loginSlice";

export const store = configureStore({
  reducer: {
    student: facultyUser,
    faculty: studentUser,
    login: login,
    otp: otp,
    logout: logout,
  },
});
