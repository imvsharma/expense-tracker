import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "@/components/app/PrivateRoute";
import HomePage from "@/pages/Home/HomePage";
import DashboardPage from "@/pages/Home/Dashboard/DashboardPage";
import LoginPage from "@/pages/Login/Login";
import SignupPage from "@/pages/Signup/Signup";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          children: [
            {
              path: "/",
              element: <DashboardPage />,
            },
          ],
        },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "signup",
      element: <SignupPage />,
    },
  ]);