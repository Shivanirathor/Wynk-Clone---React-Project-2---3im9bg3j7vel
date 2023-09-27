import React, { useState, useRef, useEffect } from "react";
import "../styles/MusicPlayer.css";
import { useDispatch, useSelector } from "react-redux";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import axios from "axios";
import { getLike } from "../redux/songsSlice";

const MusicPlayer = () => {
  const dispatch = useDispatch();
  const audioRef = useRef(null);
  const { currentSongUrl } = useSelector((state) => state.songs);
  const { isLogin } = useSelector((state) => state.login);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [like, setLike] = useState(false);
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);

  const handleVolumeUp = () => {
    if (volume < 100) {
      setVolume(volume + 10);
      setIsMuted(false);
      audioRef.current.volume = (volume + 10) / 100;
    }
  };

  const handleVolumeDown = () => {
    if (volume > 0) {
      setVolume(volume - 10);
      setIsMuted(false);
      audioRef.current.volume = (volume - 10) / 100;
    }
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
    audioRef.current.muted = !audioRef.current.muted;
  };

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

  // const handleLikedSong = () => {
  //   if (isLogin) {
  //     const token = localStorage.getItem("token");
  //     const songId = currentSongUrl.id;
  //     const jwtToken = token;
  //     const projectID = "22pghva8m0p8";
  //     const apiUrl =
  //       "https://academics.newtonschool.co/api/v1/music/favorites/like";

  //     const headers = {
  //       Authorization: `Bearer ${jwtToken}`,
  //       projectID: projectID,
  //     };

  //     const requestBody = {
  //       songId: songId,
  //     };

  //     axios
  //       .patch(apiUrl, requestBody, { headers })
  //       .then((response) => {
  //         if (response.ok) {
  //           console.log("Song liked successfully.");
  //         } else {
  //           console.error("Failed to like the song.");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("An error occurred:", error);
  //       });
  //   } else {
  //     setShowLoginAlert(true);
  //   }
  //   setLike(!like);
  // };
  const handleLikedSong = () => {
    const token = localStorage.getItem("token");
    if (isLogin) {
      console.log("login", isLogin)
      const songId = currentSongUrl.id;
      dispatch(getLike(songId));
    } else {
      setShowLoginAlert(true);
    }
    setLike(!like);
  };

  const handleAlertClose = () => {
    setShowLoginAlert(false);
  };

  return (
    <>
      {showLoginAlert && (
        <Alert severity="warning" onClose={handleAlertClose}>
          <AlertTitle>Please log in</AlertTitle>
          You need to log in to access your Liked Songs.
        </Alert>
      )}
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
        <div className="controls">
          <div className="volume-controls">
            <button
              title="Volume down"
              className="control-button"
              onClick={handleVolumeDown}
            >
              <VolumeDownIcon />
            </button>
            <button
              title="Mute"
              className="control-button"
              onClick={handleMute}
            >
              {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
            </button>
            <button
              title="Volume up"
              className="control-button"
              onClick={handleVolumeUp}
            >
              <VolumeUpIcon />
            </button>
          </div>
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

        <div
          className={`span ${like && "like-span"}`}
          title="Add Your Fav Song"
          onClick={ handleLikedSong}
        >
          <FavoriteIcon
            title="Add to favorite page"
            className={`span ${like && "like-span"}`}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="controls">
          <button
            title="Play Song"
            className="control-button-center"
            onClick={togglePlayPause}
          >
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </button>
        </div>
      </div>
    </>
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
