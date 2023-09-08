import React from "react";
import { useSelector, useDispatch } from "react-redux";


const LikedSongs = () => {
  //   const {favoriteSongs} = useSelector((state) => state.favorites);
  const favoriteSongs = useSelector((state) => state.favorites.favoriteSongs);
  const dispatch = useDispatch();

  const handleAddToFavorites = (song) => {
    dispatch(handleAddToFavorites(song));
  };

  const handleRemoveFromFavorites = (song) => {
    dispatch(removeFromFavorites(song));
  };

  return (
    <div style={{ color: "white" }}>
      <h1>Liked Songs</h1>
      <ul>
        {favoriteSongs.map((song) => (
          <li key={song.id}>
            {song.title}
            <button onClick={() => handleRemoveFromFavorites(song)}>
              Remove from Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikedSongs;
