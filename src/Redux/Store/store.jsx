import { configureStore } from "@reduxjs/toolkit";

import { sideBarMobile } from "../Slice/toggleSlice";
import { userDetailCatch } from "../Slice/fetchDataSlice";

export const store = configureStore({
  reducer: {
    sideBar: sideBarMobile,
    user: userDetailCatch,
  },
});
