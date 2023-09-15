import React from "react";
import "../styles/App.css";
import { useSelector } from "react-redux";

const RecentPlayed = () => {
  const recentSongs = useSelector((state) => state.songs.addToRecent);

  return (
    <div className="recent">
      <h2 style={{ marginLeft: 30, fontSize: 25 }}>Recent Played</h2>
      <div className="recent-played-list">
        {recentSongs.map((song) => (
          <div key={song.title} className="recent-played-song">
            <img src={song.image} alt={song.title} width={200} height={210} />
            <br />
            <p>Title : {song.title}</p>
            <p>Artist Name : ({song.name})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPlayed;
