import { createSlice } from "@reduxjs/toolkit";
import { facultyPostData } from "../ReduxThunk/facultyThunks";
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

export const { addStudentData } = facultyUserSlice.actions;
export default facultyUserSlice.reducer;
