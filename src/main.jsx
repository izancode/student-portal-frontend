import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./Redux/Store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import RegisterPages from "./Pages/Registration/Register/RegisterPages.jsx";
import { LoginForm, OtpForm } from "./Pages/Registration/Login/LoginForm.jsx";
import Dashboard from "./Pages/home/Dashboard.jsx";
import NotFoundPage from "./Pages/NotFound/NotFoundPage.jsx";
import {
  LoginProtectRoute,
  HomeProtectRoute,
} from "./utils/ProtectedRoute/protectRoute.jsx";
import "react-toastify/dist/ReactToastify.css";
// OtpProtectRoute,
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginProtectRoute />,
    children: [
      {
        path: "/",
        element: <LoginForm />, // HomePage is only accessible after passing the protection check
      },
    ],
  },
  {
    path: "/verify-otp",
    element: <OtpForm />, // Use protect route here
    children: [
      {
        path: "/verify-otp",
        element: <OtpForm />,
      },
    ],
  },
  {
    path: "/signin",
    element: <RegisterPages />,
  },
  {
    path: "/home",
    element: <HomeProtectRoute />, // Protect home page route
    children: [
      {
        path: "/home",
        element: <Dashboard />, // HomePage is only accessible after passing the protection check
      },
    ],
  },
  {
    // This is the wildcard route that catches all undefined routes
    path: "*",
    element: <NotFoundPage />, // 404 page component
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer
        className={() =>
          "fixed bottom-[var(--toastify-toast-bottom)] right-[var(--toastify-toast-right)] z-[var(--toastify-z-index)] p-1 w-auto text-white"
        }
        toastClassName={() =>
          "relative touch-none min-h-[var(--toastify-toast-min-height)] mb-4 p-2 rounded-none shadow-md flex justify-between max-h-[var(--toastify-toast-max-height)] font-[var(--toastify-font-family)] cursor-default z-0 overflow-hidden bg-[var(--toastify-color-light)] text-[var(--toastify-text-color-light)]"
        }
        bodyClassName={() => "my-auto flex-1 p-1.5 flex items-center"}
        // autoClose={false}
        closeButton={false}
      />
    </Provider>
  </StrictMode>
);
