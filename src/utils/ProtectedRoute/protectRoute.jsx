import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const OtpProtectRoute = () => {
  const loginStatus = useSelector((state) => state.login.status);
  return loginStatus ? <Outlet /> : <Navigate to="/" />;
};

export const LoginProtectRoute = () => {
  const token = document.cookie;
  const tokenValue = token.split("=")[1];

  if (!token && !tokenValue) {
    return <Outlet />;
  }
  return <Navigate to="/menu" />;
};
export const HomeProtectRoute = () => {
  const token = document.cookie;
  const tokenValue = token.split("=")[1];

  if (token && tokenValue) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
};
