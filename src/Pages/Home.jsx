import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/App.css";
import Category from "../components/Category";
import { useDispatch, useSelector } from "react-redux";
import { getSongsList } from "../redux/songsSlice";
import { Card } from "@mui/material";
import Footer from "../components/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const { songsList } = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(getSongsList());
  });
  return (
    <>
      <Navbar />
      <Category />
      {songsList &&
        songsList.slice(0, 10).map((songs, index) => {
          return (
            <div key={index}>
              <Card title={songs.title} />
            </div>
          );
        })}
      <Category />
      {songsList &&
        songsList.slice(10, 20).map((songs, index) => {
          return <div key={index}>{songs.title}</div>;
        })}
      <Category />
      {songsList &&
        songsList.slice(20, 30).map((songs, index) => {
          return <div key={index}>{songs.title}</div>;
        })}
        {/* <Footer/> */}
   
    </>
  );
};

export default Home;
