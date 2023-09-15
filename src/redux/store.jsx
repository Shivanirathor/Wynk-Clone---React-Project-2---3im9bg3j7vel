import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "./songsSlice";
import loginReducer from "./loginSlice";

export const store = configureStore({
  reducer: {
    songs: songsReducer,
    login: loginReducer,
  },
});


