import React from "react";
import { useSelector } from "react-redux";

const RecentPlayed = () => {
  const recentSongs = useSelector((state) => state.songs.addToRecent);
  console.log("recent", recentSongs);

  return (
    <div>
      <h2 style={{padding:8, marginLeft:20, fontSize:30}}>Recent Played</h2>
      <div className="recent-played-list">
        {recentSongs.map((song) => (
          <div key={song.title} className="recent-played-song">
            <img src={song.image} alt={song.title} width={200} />
           <br/>
            <p>Title : {song.title}</p>
             <p>Artist Name : ({song.name})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPlayed;
