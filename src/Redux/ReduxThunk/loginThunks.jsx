import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginPostData = createAsyncThunk(
  "student/postLoginData",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_LOGIN_THUNKS_POST_API,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response);
      return {
        data: response.data,
        message: response.data.message,
      };
    } catch (error) {
      console.log(error);
      const errorMessage = error.response
        ? error.response.data
        : { message: error.message };
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const otpPostData = createAsyncThunk(
  "student/postOtpData",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_OTP_THUNKS_POST_API,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response);
      return {
        data: response.data,
        message: response.data.message,
      };
    } catch (error) {
      console.log(error);
      const errorMessage = error.response
        ? error.response.data
        : { message: error.message };
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
