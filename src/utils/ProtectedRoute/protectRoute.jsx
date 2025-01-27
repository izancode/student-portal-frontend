import { Navigate, Outlet } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { useProtectCustomHook } from "../../customHooks/useProtectCustomHook";

export const OtpProtectRoute = () => {
  const loginField = sessionStorage.getItem("loginField");
  return loginField ? <Outlet /> : <Navigate to="/" replace />;
};
export const HomeProtectRoute = () => {
  const { isAuthenticated, loading } = useProtectCustomHook();

  if (loading) {
    return (
      <div className="flex justify-center h-96 items-center">
        <InfinitySpin
          visible={true}
          width="200"
          color="#1c22c1"
          ariaLabel="infinity-spin-loading"
          wrapperStyle={{}}
        />
      </div>
    );
  }

  if (isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to="/" replace />;
};

export const LoginProtectRoute = () => {
  const { isAuthenticated, loading } = useProtectCustomHook();

  if (loading) {
    return (
      <div className="flex justify-center h-96 items-center">
        <InfinitySpin
          visible={true}
          width="200"
          color="#1c22c1"
          ariaLabel="infinity-spin-loading"
          wrapperStyle={{}}
        />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to="/menu" replace />;
};
