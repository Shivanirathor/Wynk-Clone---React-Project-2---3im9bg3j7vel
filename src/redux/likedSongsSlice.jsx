// likedSongsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const likedSongsSlice = createSlice({
  name: "likedSongs",
  initialState: [],
  reducers: {
    addLikedSong: (state, action) => {
      // Check if the song is already in the liked songs list
      if (!state.some((song) => song.id === action.payload.id)) {
        state.push(action.payload);
      }
    },
    removeLikedSong: (state, action) => {
      // Remove the song from the liked songs list by its ID
      return state.filter((song) => song.id !== action.payload.id);
    },
  },
});

export const { addLikedSong, removeLikedSong } = likedSongsSlice.actions;
export default likedSongsSlice.reducer;
