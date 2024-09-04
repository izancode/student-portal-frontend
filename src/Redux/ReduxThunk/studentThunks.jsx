import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const studentPostData = createAsyncThunk(
  "student/postStudentData",
  async (formData, thunkAPI) => {
    try {
      console.log("Starting POST request with data:", formData);

      const response = await axios.post(
        import.meta.env.VITE_STUDENT_THUNKS_POST_API,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("Response received:", response.data);

      return response.data;
    } catch (error) {
      console.log(error);
      const errorMessage = error.response
        ? error.response.data
        : { message: error.message };
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
