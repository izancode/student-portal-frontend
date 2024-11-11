import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const isProduction = import.meta.env.MODE === "production";

const facultyEnvironmentValues = isProduction
  ? import.meta.env.VITE_FACULTY_THUNKS_POST_API
  : import.meta.env.VITE_FACULTY_THUNKS_POST_API_LOCAL;
const studentEnvironmentValues = isProduction
  ? import.meta.env.VITE_STUDENT_THUNKS_POST_API
  : import.meta.env.VITE_STUDENT_THUNKS_POST_API_LOCAL;

export const facultyPostData = createAsyncThunk(
  "student/postFacultyData",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(facultyEnvironmentValues, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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
      const response = await axios.post(studentEnvironmentValues, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);
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
