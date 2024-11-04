import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
export const OtpProtectRoute = () => {
  const loginStatus = useSelector((state) => state.login.status);
  console.log(loginStatus);
  return loginStatus ? <Outlet /> : <Navigate to="/" />;
};

// export const LoginProtectRoute = () => {
//   const loginStatus = useSelector((state) => state.login.status);
//   console.log(loginStatus);
//   return loginStatus ? <Navigate to="/verify-otp" /> : <Outlet />;
// };
