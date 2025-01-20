import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userGetDataThunk = createAsyncThunk(
  "user/getUserDetail",
  async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_USER_THUNKS_GET_API,

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
      return errorMessage;
    }
  }
);
