import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import songsReducer from "./songsSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    songs: songsReducer,
  },
});
