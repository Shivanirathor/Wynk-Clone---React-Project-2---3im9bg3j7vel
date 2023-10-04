import React from "react";
import "../styles/MoviesCard.css";
import { useSelector } from "react-redux";
import NotStartedIcon from "@mui/icons-material/NotStarted";

const RecentPlayed = () => {
  const recentSongs = useSelector((state) => state.songs.addToRecent);

  return (
    <>
      {recentSongs.length > 0 && <h2 className="textTitle">Recent Played</h2>}
      <div className="image-container-2">
        {recentSongs.map((song) => (
          <div key={song.title} className="recentCards">
            <img title={song.title} src={song.image} alt={song.title} width={190} height={200} />
          
            <h2 className="title">{song.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecentPlayed;
