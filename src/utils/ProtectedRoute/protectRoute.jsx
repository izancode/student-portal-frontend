import { Navigate, Outlet } from "react-router-dom";

export const OtpProtectRoute = () => {
  const loginField = sessionStorage.getItem("loginField");
  console.log(loginField);
  return loginField ? <Outlet /> : <Navigate to="/" />;
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
  console.log({ document });
  const tokenValue = token.split("=")[1];
  console.log(tokenValue);
  if (!token && !tokenValue) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
};
