import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";

import SubscriptionModal from "./components/SubscriptionModal ";
import { Payment } from "@mui/icons-material";
// import '../styles/App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Payment />,
  },
  {
    path: "loginPage",
    element: <LoginPage />,
  },
   {
    path: "subscription",
    element: <SubscriptionModal />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
