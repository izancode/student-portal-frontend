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
      console.error("Error in POST request:", error);
      console.error(
        "Error response:",
        error.response ? error.response.data : "No response"
      );
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
