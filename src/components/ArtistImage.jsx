import React from "react";
import "../styles/MoviesCard.css";

const ArtistImage = ({ songsList, first, last }) => {
  return (
    <div className="artistImg" style={{ color: "white" }}>
      {songsList &&
        songsList.slice(first, last).map((songs, index) => {
          return (
            <div key={songs.id || index}>
              <img
                title={songs?.artist[0]?.name}
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
  );
};

export default ArtistImage;
