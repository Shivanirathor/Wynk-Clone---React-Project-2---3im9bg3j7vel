import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TopArtist = () => {
  const { songsList } = useSelector((state) => state.songs);

  return (
    <>
      <Navbar />
      <div className="artistImg">
        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          
            backgroundColor: "rgb(29, 29, 36)",
          }}
        >
          {songsList &&
            songsList.slice(0, 20).map((songs, index) => {
              return (
                <div key={songs.id || index} style={{  marginLeft:"20px",marginRight:"20px"}}>
                  <img
                    src={songs?.artist[0]?.image}
                    alt="artist"
                    width={190}
                    height={190}
                  />
                  <h2 className="artistName">{songs?.artist[0]?.name}</h2>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TopArtist;
