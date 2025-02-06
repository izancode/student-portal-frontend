import { Navigate, Outlet } from "react-router-dom";

import { useProtectCustomHook } from "../../customHooks/useProtectCustomHook";
import { LoaderInfinitySpin } from "../Loader/Loader";

export const OtpProtectRoute = () => {
  const loginField = sessionStorage.getItem("loginField");
  return loginField ? <Outlet /> : <Navigate to="/" replace />;
};
export const HomeProtectRoute = () => {
  const { isAuthenticated, loading } = useProtectCustomHook();

  if (loading) {
    return <LoaderInfinitySpin />;
  }

  if (isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to="/" replace />;
};

export const LoginProtectRoute = () => {
  const { isAuthenticated, loading } = useProtectCustomHook();

  if (loading) {
    return <LoaderInfinitySpin />;
  }

  if (!isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to="/menu" replace />;
};
