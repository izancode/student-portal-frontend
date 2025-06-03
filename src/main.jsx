import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./Redux/Store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import RegisterPages from "./Pages/Registration/Register/RegisterPages.jsx";
import { LoginForm, OtpForm } from "./Pages/Registration/Login/LoginForm.jsx";
import {
  Profile,
  User,
  MenuControlled,
  ClassLabTools,
  CourseSchedule,
  ClassTimings,
  FacultyAllocation,
  Attendance,
  Assignment,
  GradesReport,
  EnrollementStatus,
  AcademicHistory,
  Chat,
  FacultyFeedback,
} from "./Pages/home/Dashboard.jsx";
import { MenuPage } from "./Components/Layout/Layout.jsx";
import NotFoundPage from "./Pages/NotFound/NotFoundPage.jsx";
import {
  LoginProtectRoute,
  HomeProtectRoute,
  OtpProtectRoute,
} from "./utils/ProtectedRoute/protectRoute.jsx";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginProtectRoute />,
    children: [
      {
        path: "/",
        element: <LoginForm />,
      },
    ],
  },
  {
    path: "/verify-otp",
    element: <OtpProtectRoute />,
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
    path: "/menu",
    element: <HomeProtectRoute />,
    children: [
      {
        path: "/menu",
        element: <MenuPage />,
      },
    ],
  },
  {
    path: "/profile",
    element: <HomeProtectRoute />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/user",
    element: <HomeProtectRoute />,
    children: [
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
  {
    path: "/menu-control",
    element: <HomeProtectRoute />,
    children: [
      {
        path: "/menu-control",
        element: <MenuControlled />,
      },
    ],
  },
  {
    path: "/classlab-tools",
    element: <HomeProtectRoute />,
    children: [
      {
        path: "/classlab-tools",
        element: <ClassLabTools />,
      },
    ],
  },
  {
    path: "/course-schedule",
    element: <HomeProtectRoute />,
    children: [
      {
        path: "/course-schedule",
        element: <CourseSchedule />,
      },
    ],
  },
  {
    path: "/class-timings",
    element: <HomeProtectRoute />,
    children: [
      {
        path: "/class-timings",
        element: <ClassTimings />,
      },
    ],
  },
  {
    path: "/faculty-allocation",
    element: <HomeProtectRoute />,
    children: [
      {
        path: "/faculty-allocation",
        element: <FacultyAllocation />,
      },
    ],
  },
  {
    path: "/attendance",
    element: <HomeProtectRoute />,
    children: [
      {
        path: "/attendance",
        element: <Attendance />,
      },
    ],
  },
  {
    path: "/assignment",
    element: <HomeProtectRoute />,
    children: [
      {
        path: "/assignment",
        element: <Assignment />,
      },
    ],
  },
  {
    path: "/grades-&-report",
    element: <HomeProtectRoute />,
    children: [
      {
        path: "/grades-&-report",
        element: <GradesReport />,
      },
    ],
  },
  {
    path: "/enrollement-status",
    element: <HomeProtectRoute />,
    children: [
      {
        path: "/enrollement-status",
        element: <EnrollementStatus />,
      },
    ],
  },
  {
    path: "/academic-history",
    element: <HomeProtectRoute />,
    children: [
      {
        path: "/academic-history",
        element: <AcademicHistory />,
      },
    ],
  },
  {
    path: "/chat",
    element: <HomeProtectRoute />,
    children: [
      {
        path: "/chat",
        element: <Chat />,
      },
    ],
  },
  {
    path: "/faculty-feedback",
    element: <HomeProtectRoute />,
    children: [
      {
        path: "/faculty-feedback",
        element: <FacultyFeedback />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
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
