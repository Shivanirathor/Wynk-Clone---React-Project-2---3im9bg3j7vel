import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/App.css";
import Category from "../components/Category";
import { useDispatch, useSelector } from "react-redux";
import { getSongsList } from "../redux/songsSlice";
import Footer from "../components/Footer";

import Slider from "../Pages/Slider";
import Slider2 from "./Slider2";

const Home = () => {
  const dispatch = useDispatch();
  const {songsList} = useSelector((state) => state.songs);


  useEffect(() => {
    dispatch(getSongsList());
  }, []);



  return (
    <>
      <Navbar />
      <Slider/>
      <div style={{ background: "rgb(29, 29, 36)", color: "white" }}>
        <Category
          mainTitle={"Recent played"}
         
        />
        <Category
          mainTitle={"New Release"}
          songsList={songsList}
          first={0}
          last={10}
        />
        <Category
          mainTitle={"Top Charts"}
          songsList={songsList}
          first={11}
          last={20}
        />
        <Category
          mainTitle={"Top Charts"}
          songsList={songsList}
          first={21}
          last={30}
        />
        
        <Category
          mainTitle={"India Music"}
          songsList={songsList}
          first={31}
          last={40}
        />

        <Category
          mainTitle={"Top Podcasts on Wynk"}
          songsList={songsList}
          first={41}
          last={50}
        />
        <Category
          mainTitle={"International Top Hits"}
          songsList={songsList}
          first={51}
          last={60}
        />
        <Category
          mainTitle={"Hindi Top 50"}
          songsList={songsList}
          first={61}
          last={70}
        />
        <Category
          mainTitle={"Trending English"}
          songsList={songsList}
          first={71}
          last={80}
        />
        <Category
          mainTitle={"Latest Hindi"}
          songsList={songsList}
          first={81}
          last={90}
        />
        <Category
          mainTitle={"Latest English"}
          songsList={songsList}
          first={91}
          last={100}
        />
     
      </div>
      <Footer/>
    </>
  );
};

export default Home;
