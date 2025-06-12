import { createSlice } from "@reduxjs/toolkit";
import {
  userGetDataThunk,
  menuGetDataThunk,
  allAdminMenuGetDataThunk2,
} from "../ReduxThunk/fetchDataThunks";

const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    userDetail: [],
    status: false,
    error: null,

    menuItems: [],
    menuStatus: false,
    menuError: null,

    adminMenuItems: [],
    adminMenuStatus: false,
    adminMenuError: null,
  },
  reducers: {
    clearUserDetail: (state) => {
      state.userDetail = [];
      state.status = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userGetDataThunk.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(userGetDataThunk.fulfilled, (state, action) => {
        state.userDetail = action.payload.data;
        state.status = action.payload.data.status;
        state.error = null;
      })
      .addCase(userGetDataThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "An error occurred";
      })

      .addCase(menuGetDataThunk.pending, (state) => {
        state.menuStatus = "loading";
        state.menuError = null;
      })
      .addCase(menuGetDataThunk.fulfilled, (state, action) => {
        state.menuItems = action.payload.data.userMenu;
        state.menuStatus = action.payload.data.status;
        state.menuError = null;
      })
      .addCase(menuGetDataThunk.rejected, (state, action) => {
        state.menuStatus = "failed";
        state.menuError = action.payload || "An error occurred";
      })

      .addCase(allAdminMenuGetDataThunk2.pending, (state) => {
        state.adminMenuStatus = "loading";
        state.adminMenuError = null;
      })
      .addCase(allAdminMenuGetDataThunk2.fulfilled, (state, action) => {
        state.adminMenuItems = action.payload.data;
        state.adminMenuStatus = action.payload.data.status;
        state.adminMenuError = null;
      })
      .addCase(allAdminMenuGetDataThunk2.rejected, (state, action) => {
        state.adminMenuStatus = "failed";
        state.adminMenuError = action.payload || "An error occurred";
      });
  },
});

export const { clearUserDetail } = userDetailSlice.actions;
export const userDetailCatch = userDetailSlice.reducer;
