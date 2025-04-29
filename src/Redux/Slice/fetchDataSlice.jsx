import { createSlice } from "@reduxjs/toolkit";
import { userGetDataThunk } from "../ReduxThunk/fetchDataThunks";
const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    userDetail: [],
    status: false,
    error: null,
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
      });
  },
});

export const { clearUserDetail } = userDetailSlice.actions;
export const userDetailCatch = userDetailSlice.reducer;
