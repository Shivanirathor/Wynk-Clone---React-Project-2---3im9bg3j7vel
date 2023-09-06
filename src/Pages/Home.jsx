import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import { getSongsList } from "../redux/songsSlice";
import Footer from "../components/Footer";
import Slider from "../Pages/Slider";
import MusicPlayer from "../components/MusicPlayer";
import RecentPlayed from "../Pages/RecentPlayed";
import Slider2 from "./Slider2";

const Home = () => {
  const dispatch = useDispatch();
  const { songsList, showMusicPlayer } = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(getSongsList());
  }, []);

  return (
    <>
      <Navbar />
      {showMusicPlayer && <MusicPlayer />}
      <Slider />
      <div style={{ background: "rgb(29, 29, 36)", color: "white"}}>
        <RecentPlayed />
        <h1 className="textTitle">New Release</h1>
        <Slider2
          mainTitle={"New Release"}
          songsList={songsList}
          first={0}
          last={10}
        />
          <h1 className="textTitle">New Release</h1>
        <Slider2
          mainTitle={"Top Charts"}
          songsList={songsList}
          first={10}
          last={20}
        />
        <h1 className="textTitle">Top Charts</h1>
        <Slider2
          mainTitle={"Top Charts"}
          songsList={songsList}
          first={20}
          last={30}
        />
        <h1 className="textTitle">India Music</h1>
        <Slider2
          mainTitle={"India Music"}
          songsList={songsList}
          first={30}
          last={40}
        />
        <h1 className="textTitle">Top Podcasts on Wynk</h1>
        <Slider2
          mainTitle={"Top Podcasts on Wynk"}
          songsList={songsList}
          first={40}
          last={50}
        />
        <h1 className="textTitle">International Top Hits</h1>
        <Slider2
          mainTitle={"International Top Hits"}
          songsList={songsList}
          first={50}
          last={60}
        />
        <h1 className="textTitle">Hindi Top 50</h1>
        <Slider2
          mainTitle={"Hindi Top 50"}
          songsList={songsList}
          first={60}
          last={70}
        />
        <h1 className="textTitle">Trending English</h1>
        <Slider2
          mainTitle={"Trending English"}
          songsList={songsList}
          first={70}
          last={80}
        />
        <h1 className="textTitle">Latest Hindi</h1>
        <Slider2
          mainTitle={"Latest Hindi"}
          songsList={songsList}
          first={80}
          last={90}
        />
        <h1 className="textTitle">Latest English</h1>
        <Slider2
          mainTitle={"Latest English"}
          songsList={songsList}
          first={90}
          last={100}
        />
      
        
      </div>
      <Footer />
    </>
  );
};

export default Home;
