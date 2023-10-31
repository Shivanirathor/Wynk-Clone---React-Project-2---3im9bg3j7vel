import React, { useState, useRef, useEffect } from "react";
import "../styles/MusicPlayer.css";
import { useDispatch, useSelector } from "react-redux";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PauseIcon from "@mui/icons-material/Pause";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Slider from "rc-slider";
import AudioPlayer from "react-h5-audio-player";
import "rc-slider/assets/index.css";
import {
  getLike,
  setCurrentSongIndex,
  setCurrentSongUrl,
} from "../redux/songsSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MusicPlayer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const audioRef = useRef(null);
  const { currentSongUrl, likedSongs, currentSongIndex, songsList } =
    useSelector((state) => state.songs);
  const { isLogin } = useSelector((state) => state.login);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [like, setLike] = useState(false);

  useEffect(() => {
    audioRef.current.src = currentSongUrl.audio;
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentSongUrl, currentSongIndex]);

  const togglePlayPause = (e) => {
    e.preventDefault();
    setCurrentTime(audioRef.current.currentTime);

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentTime]);

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

  const playPreviousSong = () => {
    if (currentSongIndex > 0) {
      const newIndex = currentSongIndex - 1;
      dispatch(setCurrentSongIndex(newIndex));
      dispatch(
        setCurrentSongUrl({
          audio: songsList[currentSongIndex].audio_url,
          title: songsList[currentSongIndex].title,
          name: songsList[currentSongIndex]?.artist[0]?.name,
          image: songsList[currentSongIndex].thumbnail,
          id: songsList[currentSongIndex]._id,
        })
      );
    }
  };
  const playNextSong = () => {
    const newIndex = currentSongIndex + 1;
    dispatch(setCurrentSongIndex(newIndex));
    dispatch(
      setCurrentSongUrl({
        audio: songsList[currentSongIndex].audio_url,
        title: songsList[currentSongIndex].title,
        name: songsList[currentSongIndex]?.artist[0]?.name,
        image: songsList[currentSongIndex].thumbnail,
        id: songsList[currentSongIndex]._id,
      })
    );
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
        <div className="player-item">
          <img
            className="image"
            src={currentSongUrl.image}
            alt={currentSongUrl.title}
            width={50}
            height={50}
          />
        </div>
        <div className="player-item-text">
          <h2 className="song-title">{currentSongUrl.title}</h2>
          <p className="artist">({currentSongUrl.name})</p>
        </div>
        <div onClick={handleLikedSong} className="saved-icon">
          <FavoriteIcon
            title="Add to favorite page"
            className={`span ${like ? "like-span red-like" : "like-span"}`}
            style={{ cursor: "pointer" }}
          />
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
        {/* <AudioPlayer
          autoPlay // Equivalent to the HTML 'autoplay' attribute
          preload="auto" // Equivalent to the HTML 'preload' attribute
          loop // Equivalent to the HTML 'loop' attribute
          src={currentSongUrl.audio} // The audio source
          onListen={handleTimeUpdate} // Callback for time update
          onLoadedMetadata={handleLoadedMetadata} // Callback for metadata loaded
          elevation={1}
          width="100%"
          variation="default"
          spacing={30}
          download // Add download button
          order="standart"
        /> */}

        <div className="controls">
          <button
            title="Previous Song"
            className="control-button"
            onClick={playPreviousSong}
          >
            <SkipPreviousIcon />
          </button>
          <button
            title={isPlaying ? "Pause Song" : "Play Song"}
            className="control-button-center"
            onClick={togglePlayPause}
          >
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </button>
          <button
            title="Next Song"
            className="control-button"
            onClick={playNextSong}
          >
            <SkipNextIcon />
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
