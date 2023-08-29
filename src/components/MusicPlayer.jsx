import React, { useState, useEffect } from 'react';
import "../styles/MusicPlayer.css";
const MusicPlayer = () => {
  const [songData, setSongData] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const fetchSongData = async () => {
    try {
      const response = await fetch('https://academics.newtonschool.co/api/v1/music/album/:id', {
        headers: {
          'projectId': 'YOUR_PROJECT_ID'
        }
      });
      const data = await response.json();
      setSongData(data);
    } catch (error) {
      console.error('Error fetching song data:', error);
    }
  };

  useEffect(() => {
    fetchSongData();
  }, []);

  const playPauseHandler = () => {
    setIsPlaying(!isPlaying);
  };

  const updateTimeHandler = (event) => {
    const audio = event.target;
    setCurrentTime(audio.currentTime);
    setDuration(audio.duration);
  };
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="music-player">
    {songData && (
      <div className="song-details">
        <img src={songData.albumArt} alt="Album Art" />
        <h2>{songData.title}</h2>
        <p>{songData.artist}</p>
      </div>
    )}

    <div className="controls">
      <button onClick={playPauseHandler}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <input
        type="range"
        value={currentTime}
        max={duration}
        onChange={(e) => setCurrentTime(e.target.value)}
      />
     <span>{`${formatTime(currentTime)} / ${formatTime(duration)}`}</span>
    </div>
  </div>
);
};

export default MusicPlayer;
