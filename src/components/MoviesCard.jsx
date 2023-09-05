import React from "react";
import "../styles/MoviesCard.css";
import { useDispatch, useSelector } from "react-redux";
import NotStartedIcon from "@mui/icons-material/NotStarted";
import {
  setAddToRecent,
  setCurrentSongUrl,
  setShowMusicPlayer,
} from "../redux/songsSlice";

const MoviesCard = ({ title, image, audio, name }) => {
  const dispatch = useDispatch();
  const musicCardHandler = () => {
    dispatch(setCurrentSongUrl({ audio, title, name, image }));
    dispatch(setShowMusicPlayer(true));

    const recentlyPlayedSong = { title, name, image }; // Customize this based on your data structure
    dispatch(setAddToRecent([recentlyPlayedSong]));
  };
  return (
    <>
      <div className="cards" onClick={musicCardHandler}>
        {/* <img title={title} src={thumbnail}alt={title} width={200} height={230}/> */}
        <img title={title} src={image} alt={title} width={250} height={230} />
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
