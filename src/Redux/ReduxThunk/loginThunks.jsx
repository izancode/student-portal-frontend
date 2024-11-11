import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const isProduction = import.meta.env.MODE === "production";
const loginEnvironmentValues = isProduction
  ? import.meta.env.VITE_LOGIN_THUNKS_POST_API
  : import.meta.env.VITE_LOGIN_THUNKS_POST_API_LOCAL;

const otpEnvironmentValues = isProduction
  ? import.meta.env.VITE_OTP_THUNKS_POST_API
  : import.meta.env.VITE_OTP_THUNKS_POST_API_LOCAL;

  
export const loginPostData = createAsyncThunk(
  "student/postLoginData",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(loginEnvironmentValues, formData, {
        headers: { "Content-Type": "application/json" },
      });
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
      const response = await axios.post(otpEnvironmentValues, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log(response);
      const token = response.data.token;
      document.cookie = `token=${token}; path=/; max-age=172800; secure; samesite=None`;

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
