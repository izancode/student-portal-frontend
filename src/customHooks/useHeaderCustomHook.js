import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutPostData } from "../Redux/ReduxThunk/loginThunks";
import { unwrapResult } from "@reduxjs/toolkit";
import { customToast } from "../utils/CustomAlert/cutomToast";
import { clearUserDetail } from "../Redux/Slice/fetchDataSlice";
export const useLogoutCustomHook = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const actionResult = await dispatch(logoutPostData());

      const dataPass = unwrapResult(actionResult);

      customToast("success", dataPass.message);
      dispatch(clearUserDetail());
      navigate("/");
    } catch (error) {
      console.log(error);
      customToast("error", error.message);
    }
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return {
    isModalOpen,
    openModal,
    closeModal,
    handleLogout,
  };
};
