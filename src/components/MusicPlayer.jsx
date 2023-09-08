import React, { useState, useRef, useEffect } from "react";
import "../styles/MusicPlayer.css";
import { useDispatch, useSelector } from "react-redux";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useNavigate } from "react-router-dom";
import { addLikedSong, removeLikedSong } from "../redux/likedSongsSlice";




const MusicPlayer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const handleLikedSong = () => {
    // Assuming currentSongUrl contains song information
    const songToAdd = {
      id: currentSongUrl.id,
      title: currentSongUrl.title,
      artist: currentSongUrl.name,
      audio: currentSongUrl.audio,
      image: currentSongUrl.image,
    };

    // Check if the song is already liked
    const isLiked = likedSongs.some((song) => song.id === songToAdd.id);

    if (isLiked) {
      // Remove the song from liked songs
      dispatch(removeLikedSong(songToAdd));
    } else {
      // Add the song to liked songs
      dispatch(addLikedSong(songToAdd));
    }
  };
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
          <span> / </span>
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
        {/* <button className="control-button">
          <SkipPreviousIcon />
        </button> */}
        <div
          style={{ fontSize: 25, cursor: "pointer" }}
          onClick={handleLikedSong}
        >
          🤍
        </div>
        <button className="control-button-center" onClick={togglePlayPause}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </button>
        {/* <button className="control-button">
          <SkipNextIcon />
        </button> */}
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
