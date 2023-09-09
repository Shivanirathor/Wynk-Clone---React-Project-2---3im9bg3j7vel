import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Payment from "./Pages/Payment";
import Summary from "./components/Summary";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import UpdatePassword from "./Pages/UpdatePassword";
import LikedSongs from "./Pages/LikedSongs";
import Trending from "./Pages/Trending";
import TopArtist from "./Pages/TopArtist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/topArtist" element={<TopArtist />} />
        <Route path="/liked" element={<LikedSongs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/update" element={<UpdatePassword />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
