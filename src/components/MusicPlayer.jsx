import React, { useState, useRef } from "react";
import "../styles/MusicPlayer.css";
const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <div className="album-art">
        <img src="album-cover.jpg" alt="Album Cover" />
      </div>
      <div className="song-details">
        <h2 className="song-title">Song Title</h2>
        <p className="artist">Artist Name</p>
        <p className="album">Album Name</p>
      </div>
      <div className="controls">
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <audio ref={audioRef}>
        <source src="song.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default MusicPlayer;
