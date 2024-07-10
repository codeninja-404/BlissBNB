import { createBrowserRouter } from "react-router-dom";
import axios from "axios";

import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import AccountPage from "../Pages/AccountPage/AccountPage";

import UserRoute from "./UserRoute";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProfilePage from "../Pages/AccountPage/SubPage/ProfilePage";

axios.defaults.baseURL = "http://localhost:3000/api";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/account",
        element: (
          <UserRoute>
            <AccountPage />
          </UserRoute>
        ),
        children: [
          {
            path: "",
            element: <ProfilePage />,
          },
          {
            path: "bookings",
            element: <div className="">My Bookings</div>,
          },
          {
            path: "places",
            element: <div>My Accommodations</div>,
          },
        ],
      },
    ],
  },
]);

export default router;
