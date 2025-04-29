import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginPostData = createAsyncThunk(
  "user/postLoginData",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_LOGIN_THUNKS_POST_API,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      return {
        data: response.data,
        message: response.data.message,
      };
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data
        : { message: error.message };
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const otpPostData = createAsyncThunk(
  "user/postOtpData",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_OTP_THUNKS_POST_API,
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      return {
        data: response.data,
        message: response.data.message,
      };
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data
        : { message: error.message };
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const logoutPostData = createAsyncThunk(
  "user/postLogoutData",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_LOGOUT_THUNKS_GET_API,
        { withCredentials: true }
      );

      return {
        data: response.data,
        message: response.data.message,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
