import { createSlice } from "@reduxjs/toolkit";
import { studentPostData } from "../ReduxThunk/studentThunks";
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

export const { addStudentData } = studentUserSlice.actions;
export default studentUserSlice.reducer;
