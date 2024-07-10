import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./Pages/HomePage/HomePage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RootLayout from "./layouts/RootLayout";
import axios from "axios";
import AccountPage from "./Pages/AccountPage/AccountPage";
import UserRoute from "./Router/UserRoute";

axios.defaults.baseURL = "http://localhost:3000/api";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/account"
          element={
            <UserRoute>
              <AccountPage />
            </UserRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
