import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/App.css";
import Category from "../components/Category";
import { useDispatch, useSelector } from "react-redux";
import { getSongsList } from "../redux/songsSlice";

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
        songsList.map((songs, index) => {
          return <div key={index}>{songs.title}</div>;
        })}
    </>
  );
};

export default Home;
