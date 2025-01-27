import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const facultyPostData = createAsyncThunk(
  "faculty/postFacultyData",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_FACULTY_THUNKS_POST_API,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return {
        data: response.data,
        message: "Faculty has been registered successfully.",
      };
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data
        : { message: error.message };
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const studentPostData = createAsyncThunk(
  "student/postStudentData",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_STUDENT_THUNKS_POST_API,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      return {
        data: response.data,
        message: "Student has been registered successfully.",
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
