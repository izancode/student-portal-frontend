import { createSlice } from "@reduxjs/toolkit";

const sideBarMobileSlice = createSlice({
  name: "sideBar",
  initialState: {
    isSideBarOpen: false,
  },
  reducers: {
    openSideBar: (state) => {
      state.isSideBarOpen = true;
    },
    closeSideBar: (state) => {
      state.isSideBarOpen = false;
    },
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
  },
});
export const { openSideBar, closeSideBar, toggleSideBar } =
  sideBarMobileSlice.actions;
export const sideBarMobile = sideBarMobileSlice.reducer;
