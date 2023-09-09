import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "./songsSlice";
import loginReducer from "./loginSlice";
import likedSongsReducer from "./likedSongsSlice";
export const store = configureStore({
  reducer: {
    songs: songsReducer,
    login: loginReducer,
    likedSongs: likedSongsReducer,
  },
});
