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
import ArtistImage from "../components/ArtistImage";

const Home = () => {
  const dispatch = useDispatch();
  const { songsList, showMusicPlayer } = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(getSongsList());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      {showMusicPlayer && <MusicPlayer />}
      <Slider />
      <div style={{ background: "rgb(29, 29, 36)", color: "white" }}>
        {songsList.length > 5 ? (
          <div>
            <RecentPlayed />

            <h1 className="textTitle">New Release</h1>
            <Slider2 songsList={songsList} first={0} last={10} />
            <h1 className="textTitle">Retro Hits</h1>
            <Slider2 songsList={songsList} first={10} last={20} />
            <ArtistImage songsList={songsList} first={0} last={6} />
            <h1 className="textTitle">Top Charts</h1>
            <Slider2 songsList={songsList} first={20} last={30} />
            <h1 className="textTitle">Indie Music</h1>
            <Slider2 songsList={songsList} first={30} last={40} />
            <ArtistImage songsList={songsList} first={6} last={12} />
            <h1 className="textTitle">Top Podcasts on Wynk</h1>
            <Slider2 songsList={songsList} first={40} last={50} />
            <h1 className="textTitle">International Top Hits</h1>
            <Slider2 songsList={songsList} first={50} last={60} />
            <ArtistImage songsList={songsList} first={12} last={18} />
            <h1 className="textTitle">Hindi Top 50</h1>
            <Slider2 songsList={songsList} first={60} last={70} />
            <h1 className="textTitle">Trending English</h1>
            <Slider2 songsList={songsList} first={70} last={80} />
            <ArtistImage songsList={songsList} first={18} last={24} />
            <h1 className="textTitle">Latest Hindi</h1>
            <Slider2 songsList={songsList} first={80} last={90} />
            <h1 className="textTitle">Latest English</h1>
            <Slider2 songsList={songsList} first={90} last={100} />
            <ArtistImage songsList={songsList} first={24} last={30} />
          </div>
        ) : (
          <div>
            <h1 className="textTitle">Search Result</h1>
            <Slider2 songsList={songsList} />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
