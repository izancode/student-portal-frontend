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

//menu fetching thunks

export const menuGetDataThunk = createAsyncThunk(
  "menu/getMenuData",
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_MENU_THUNKS_GET_API,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // console.log("menuGetDataThunk responce", response.data);
      return {
        data: response.data,
      };
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data
        : { message: error.message };
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const allAdminMenuGetDataThunk2 = createAsyncThunk(
  "menu/getAllMenuData",
  async (selectedRole, thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_ADMIN_MENU_THUNKS_GET_API,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          params: {
            role: selectedRole,
          },
        }
      );
      // console.log("allAdminMenuGetDataThunk2 responce", response.data);
      return {
        data: response.data,
      };
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data
        : { message: error.message };
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const allAdminMenuGetDataThunk = async (selectedRole) => {
  try {
    const response = await axios.get(
      import.meta.env.VITE_ADMIN_MENU_THUNKS_GET_API,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        params: {
          role: selectedRole,
        },
      }
    );
    console.log("allAdminMenuGetDataThunk response", response);
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
export const updateAdminMenuGetDataThunk = async (menuData) => {
  try {
    const response = await axios.patch(
      import.meta.env.VITE_UPDATE_ADMIN_MENU_THUNKS_GET_API,
      menuData,

      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    console.log("updateAdminMenuGetDataThunk response", response);
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
