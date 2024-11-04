import { createSlice } from "@reduxjs/toolkit";
import { loginPostData, otpPostData } from "../ReduxThunk/loginThunks";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    login: [],
    status: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginPostData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginPostData.fulfilled, (state, action) => {
        state.status = true;
        state.login.push(action.payload);
        state.error = null;
      })
      .addCase(loginPostData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "An error occurred";
      });
  },
});

const otpSlice = createSlice({
  name: "otp",
  initialState: {
    otp: [],
    status: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(otpPostData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(otpPostData.fulfilled, (state, action) => {
        state.status = true;
        state.otp.push(action.payload);
        state.error = null;
      })
      .addCase(otpPostData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "An error occurred";
      });
  },
});

export const login = loginSlice.reducer;
export const otp = otpSlice.reducer;
