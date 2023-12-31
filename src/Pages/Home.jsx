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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MuiNav from "../components/MuiNav";

const Home = () => {
  const dispatch = useDispatch();
  const { songsList, showMusicPlayer } = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(getSongsList());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Navbar />
      {showMusicPlayer && <MusicPlayer />}
      <Slider />
      <div style={{ background: "rgb(29, 29, 36)", color: "white" }}>
        {songsList && songsList.length > 5 ? (
          <div>
            <RecentPlayed />
            <h2 className="textTitle">New Release</h2>
            <Slider2 songsList={songsList} first={0} last={10} />
            <h2 className="textTitle">Retro Hits</h2>
            <Slider2 songsList={songsList} first={10} last={20} />
            <ArtistImage songsList={songsList} first={0} last={6} />
            <h2 className="textTitle">Top Charts</h2>
            <Slider2 songsList={songsList} first={20} last={30} />
            <h2 className="textTitle">Indie Music</h2>
            <Slider2 songsList={songsList} first={30} last={40} />
            {/* <ArtistImage songsList={songsList} first={6} last={12} /> */}
            <h2 className="textTitle">Top Podcasts on Wynk</h2>
            <Slider2 songsList={songsList} first={40} last={50} />
            <h2 className="textTitle">International Top Hits</h2>
            <Slider2 songsList={songsList} first={50} last={60} />
            {/* <ArtistImage songsList={songsList} first={12} last={18} /> */}
            <h2 className="textTitle">Hindi Top 50</h2>
            <Slider2 songsList={songsList} first={60} last={70} />
            <h2 className="textTitle">Trending English</h2>
            <Slider2 songsList={songsList} first={70} last={80} />
            <ArtistImage songsList={songsList} first={18} last={24} />
            <h2 className="textTitle">Latest Hindi</h2>
            <Slider2 songsList={songsList} first={80} last={90} />
            <h2 className="textTitle">Latest English</h2>
            <Slider2 songsList={songsList} first={90} last={100} />
            <ArtistImage songsList={songsList} first={24} last={30} />
          </div>
        ) : (
          <div>
            <h2 className="textTitle">Search Result</h2>
            <Slider2 songsList={songsList} />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
