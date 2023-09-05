// import React, { useState, useRef } from "react";
// import "../styles/MusicPlayer.css";
// import { useSelector } from "react-redux";
// const MusicPlayer = () => {
//   const audioRef = useRef(null);
//   const { currentSongUrl } = useSelector((state) => state.songs);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const togglePlayPause = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="music-player">
//       <div className="album-art">
//         <img src="album-cover.jpg" alt="Album Cover" />
//       </div>
//       <div className="song-details">
//         <h2 className="song-title">Song Title:{currentSongUrl.title} </h2>
//         <p className="artist">Artist Name</p>
//         <p className="album">Album Name</p>
//       </div>
//       <div className="controls">
//         <button onClick={togglePlayPause}>
//           {isPlaying ? "Pause" : "Play"}
//         </button>
//       </div>
//       <audio ref={audioRef}>
//         <source src={currentSongUrl.audio} type="audio/mpeg" />
//       </audio>
//     </div>
//   );
// };

// export default MusicPlayer;

import React, { useState, useRef, useEffect } from "react";
import "../styles/MusicPlayer.css";
import { useSelector } from "react-redux";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const { currentSongUrl } = useSelector((state) => state.songs);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSliderChange = (value) => {
    setCurrentTime(value);
    audioRef.current.currentTime = value;
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="music-player-container">
      <div>
        <img
          className="image"
          src={currentSongUrl.image}
          alt={currentSongUrl.title}
          width={50}
          height={50}
        />
        <h2 className="song-title">{currentSongUrl.title}</h2>
        <p className="artist">({currentSongUrl.name})</p>
      </div>
      <div className="slider-container">
        <Slider
          value={currentTime}
          min={0}
          max={duration}
          onChange={handleSliderChange}
          railStyle={{ backgroundColor: "rgb(29, 29, 36)" }}
          trackStyle={{ backgroundColor: "rgb(227, 46, 45)" }}
          handleStyle={{
            borderColor: "rgb(227, 46, 45)",
            backgroundColor: "rgb(227, 46, 45)",
          }}
        />

        <div className="time-display">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      >
        <source src={currentSongUrl.audio} type="audio/mpeg" />
      </audio>
      <div className="controls">
        <button className="control-button">
          <SkipPreviousIcon />
        </button>
        <button className="control-button-center" onClick={togglePlayPause}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </button>
        <button className="control-button">
          <SkipNextIcon />
        </button>
      </div>
    </div>
  );
};

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
}

export default MusicPlayer;
