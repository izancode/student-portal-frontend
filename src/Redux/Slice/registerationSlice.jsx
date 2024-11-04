import { createSlice } from "@reduxjs/toolkit";
import {
  facultyPostData,
  studentPostData,
} from "../ReduxThunk/registerationThunks";

const facultyUserSlice = createSlice({
  name: "faculty",
  initialState: {
    faculty: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(facultyPostData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(facultyPostData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.faculty.push(action.payload);
        state.error = null;
      })
      .addCase(facultyPostData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "An error occurred";
      });
  },
});

const studentUserSlice = createSlice({
  name: "student",
  initialState: {
    students: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(studentPostData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(studentPostData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.students.push(action.payload);
        state.error = null;
      })
      .addCase(studentPostData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "An error occurred";
      });
  },
});

export const facultyUser = facultyUserSlice.reducer;
export const studentUser = studentUserSlice.reducer;
