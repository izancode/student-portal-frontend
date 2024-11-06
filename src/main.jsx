import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { store } from "./Redux/Store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import RegisterPages from "./Pages/Registration/Register/RegisterPages.jsx";
import { LoginForm, OtpForm } from "./Pages/Registration/Login/LoginForm.jsx";
import Dashboard from "./Pages/Registration/Home/Dashboard.jsx";
import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/verify-otp",
    element: <OtpForm />,
  },
  {
    path: "/signin",
    element: <RegisterPages />,
  },
  {
    path: "/home",
    element: <Dashboard />,
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
