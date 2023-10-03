import React, { useState, useRef, useEffect } from "react";
import "../styles/MusicPlayer.css";
import { useDispatch, useSelector } from "react-redux";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PauseIcon from "@mui/icons-material/Pause";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { getLike, getLikeShowData } from "../redux/songsSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MusicPlayer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const audioRef = useRef(null);
  const { currentSongUrl, likedSongs } = useSelector((state) => state.songs);
  const { isLogin } = useSelector((state) => state.login);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [like, setLike] = useState(false);

  useEffect(() => {
    dispatch(getLikeShowData());
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

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

  const handleLikedSong = () => {
    if (isLogin) {
      const songId = currentSongUrl.id;
      const isSongLiked = likedSongs.some(
        (likedSong) => likedSong._id === songId
      );
      if (isSongLiked) {
        toast.info("Song is already saved to Liked Songs!", {
          position: "top-center",
          autoClose: 2000,
        });
      } else {
        dispatch(getLike(songId));
        setLike(true);
        toast.success("Song added to Liked Songs!", {
          position: "top-center",
          autoClose: 2000,
          theme: "light",
        });
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <>
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

        <div className="music-slider-container">
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

        <div onClick={handleLikedSong}>
          <FavoriteIcon
            title="Add to favorite page"
            className={`span ${like ? "like-span red-like" : "like-span"}`}
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
