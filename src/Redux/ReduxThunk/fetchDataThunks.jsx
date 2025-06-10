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
      };
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data
        : { message: error.message };
      return errorMessage;
    }
  }
);

export const allUserGetDataThunk = async (page, limit, search) => {
  try {
    const response = await axios.get(
      import.meta.env.VITE_ALL_USER_THUNKS_GET_API,

      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        params: {
          page,
          limit,
          search,
        },
      }
    );

    return {
      data: response.data,
    };
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data
      : { message: error.message };
    return errorMessage;
  }
};

export const allSingleUserGetDataThunk = async (userId) => {
  try {
    const response = await axios.get(
      import.meta.env.VITE_USER_THUNKS_GET_API,

      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        params: {
          userId,
        },
      }
    );

    return {
      data: response.data,
    };
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data
      : { message: error.message };
    return errorMessage;
  }
};

export const allMenuGetDataThunk = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_MENU_THUNKS_GET_API, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    return {
      data: response.data,
    };
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data
      : { message: error.message };
    return errorMessage;
  }
};

export const allAdminMenuGetDataThunk = async () => {
  try {
    const response = await axios.get(
      import.meta.env.VITE_ADMIN_MENU_THUNKS_GET_API,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        params: {
          role: "admin",
        },
      }
    );
    console.log("response", response);
    return {
      data: response.data,
    };
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data
      : { message: error.message };
    return errorMessage;
  }
};
