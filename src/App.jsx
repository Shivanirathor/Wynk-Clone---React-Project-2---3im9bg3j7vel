// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./Pages/Home";
// import LoginPage from "./Pages/LoginPage";

// import SubscriptionModal from "./components/SubscriptionModal ";
// import { Payment } from "@mui/icons-material";
// // import '../styles/App.css';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "loginPage",
//     element: <LoginPage />,
//   },
//    {
//     path: "subscription",
//     element: <SubscriptionModal />,
//   },
// ]);

// const App = () => {
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// };

// export default App;

import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";


import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/Home";
import SubscriptionModal from "./components/SubscriptionModal ";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/login" element={<LoginPage/>} />

       <Route  path="/subscription" element={<SubscriptionModal/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
