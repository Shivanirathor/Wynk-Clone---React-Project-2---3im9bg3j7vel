import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import Counter from "./Pages/Counter";
// import '../styles/App.css';

const router = createBrowserRouter([
  // {
  //   path: "/home",
  //   element: <Home />,
  // },
  {
    path: "/",
    element: <LoginPage />,
  },
  // {
  //   path: "counter",
  //   element: <Counter />,
  // },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
