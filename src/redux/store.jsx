import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import songsReducer from "./songsSlice";
import loginReducer from "./loginSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    songs: songsReducer,
    login: loginReducer,
  },
});
