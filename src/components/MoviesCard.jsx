import React from "react";
import "../styles/MoviesCard.css";
import { useDispatch } from "react-redux";
import { setCurrentSongUrl, setShowMusicPlayer } from "../redux/songsSlice";
const MoviesCard = ({ title, mood, image, audio }) => {
  const dispatch = useDispatch();
  const musicCardHandler = () => {
    dispatch(setShowMusicPlayer(false));

    dispatch(setCurrentSongUrl({audio,title}));
    dispatch(setShowMusicPlayer(true));
  };
  return (
    <>
      <div className="cards" onClick={musicCardHandler}>
        {/* <img title={title} src={thumbnail}alt={title} width={200} height={230}/> */}
        <img title={title} src={image} alt={title} width={200} height={230} />
        <div className="cards-body">
          <h2>{title}</h2>
          <h2>{mood}</h2>
          <h2>❤</h2>
        </div>
      </div>
      <h2 className="title">{title}</h2>
    </>
  );
};

export default MoviesCard;
