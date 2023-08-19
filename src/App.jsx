import React from 'react'
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home';
// import '../styles/App.css';
const App = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   // {
  //   //   path: "home",
  //   //   element: <Home />,
  //   // },
    
  //   // {
  //   //   path: "signup",
  //   //   element: <Signup />,
  //   // },
  //   // {
  //   //   path: "login",
  //   //   element: <SignIn />,
  //   // },
    
  // ]);

  return (
    <div id="main">
      <Home/>
        {/* <RouterProvider router={router} /> */}
    </div>
  )
}


export default App;
