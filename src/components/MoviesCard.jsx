import React from "react";
import "../styles/MoviesCard.css";
import { useDispatch } from "react-redux";
import NotStartedIcon from "@mui/icons-material/NotStarted";
import {
  setAddToRecent,
  setCurrentSongUrl,
  setShowMusicPlayer,
} from "../redux/songsSlice";

const MoviesCard = ({ title, image, audio, name, id ,volume}) => {
  const dispatch = useDispatch();
  const musicCardHandler = () => {
    dispatch(setCurrentSongUrl({ audio, title, name, image, id,volume}));
    dispatch(setShowMusicPlayer(true));
    const recentlyPlayedSong = { title, name, image };
    dispatch(setAddToRecent([recentlyPlayedSong]));
  };
  return (
    <>
      <div className="cards" onClick={musicCardHandler}>
        <img title={title} src={image} alt={title} width={207} height={215} />
        <div className="cards-body">
          <button className="control-button-centerM">
            <NotStartedIcon />
          </button>
        </div>
      </div>
      <h2 className="title">{title}</h2>
    </>
  );
};

export default MoviesCard;
