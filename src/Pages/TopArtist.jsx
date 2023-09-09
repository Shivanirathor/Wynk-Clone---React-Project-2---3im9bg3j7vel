import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TopArtist = () => {
  const { songsList } = useSelector((state) => state.songs);

  return (
    <>
      <Navbar />
      <div
        className="artistImg"
        style={{
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {songsList &&
          songsList.slice(0, 20).map((songs, index) => {
            return (
              <div key={songs.id || index}>
                <img
                  src={songs?.artist[0]?.image}
                  alt="artist"
                  width={210}
                  height={210}
                />
                <h2 className="artistName">{songs?.artist[0]?.name}</h2>
              </div>
            );
          })}
      </div>
      <Footer />
    </>
  );
};

export default TopArtist;
