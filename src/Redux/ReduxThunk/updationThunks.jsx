import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userUpdateData = createAsyncThunk(
  "user/updateUserData",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.patch(
        import.meta.env.VITE_USER_THUNKS_UPDATE_API,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      return {
        data: response.data,
        message: response.data.message,
      };
    } catch (error) {
      console.log(error);
      const errorPayload = {
        message: error.response.data.message || "Internal Server Error",
        status: error.response.data.status || 500,
      };
      return thunkAPI.rejectWithValue(errorPayload);
    }
  }
);

export const studentImageUpdateData = createAsyncThunk(
  "student/updateImageStudentData",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.patch(
        import.meta.env.VITE_USER_THUNKS_IMAGE_UPDATE_API,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      return {
        data: response.data,
        message: response.data.message,
      };
    } catch (error) {
      console.log(error);
      const errorPayload = {
        message: error.response.data.message || "Internal Server Error",
        status: error.response.data.status || 500,
      };
      return thunkAPI.rejectWithValue(errorPayload);
    }
  }
);
