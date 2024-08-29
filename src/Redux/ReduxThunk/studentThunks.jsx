import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const studentPostData = createAsyncThunk(
  "student/postStudentData",
  async (studentData, thunkAPI) => {
    try {
      console.log("Starting POST request with data:", studentData);
      const response = await axios.post(
        "https://student-portal-api.vercel.app/api/v1/studentusers",
        studentData
      );
      console.log("Response received:", response.data);
      return response.data;
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data
        : { message: error.message };
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
