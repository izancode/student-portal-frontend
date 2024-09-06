import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const facultyPostData = createAsyncThunk(
  "student/postFacultyData",
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
