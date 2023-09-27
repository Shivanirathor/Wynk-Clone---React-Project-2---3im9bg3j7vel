import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSongsList = createAsyncThunk(
  "songs/getSongsList",
  async (thunkAPI) => {
    const res = await fetch(
      "https://academics.newtonschool.co/api/v1/music/song?limit=100",
      {
        headers: {
          projectId: "22pghva8m0p8",
        },
      }
    ).then((data) => data.json());

    return res;
  }
);

export const getRomanticSong = createAsyncThunk(
  "songs/getRomanticSong",
  async (thunkAPI) => {
    const url = `https://academics.newtonschool.co/api/v1/music/song?limit=100&filter={"mood":"romantic"}`;
    const res = await fetch(url, {
      headers: {
        projectId: "22pghva8m0p8",
      },
    }).then((data) => data.json());

    return res;
  }
);
export const getSadSong = createAsyncThunk(
  "songs/getSadSong",
  async (thunkAPI) => {
    const url = `https://academics.newtonschool.co/api/v1/music/song?limit=100&filter={"mood":"sad"}`;
    const res = await fetch(url, {
      headers: {
        projectId: "22pghva8m0p8",
      },
    }).then((data) => data.json());

    return res;
  }
);
export const getExcitedSong = createAsyncThunk(
  "songs/getExcitedSong",
  async (thunkAPI) => {
    const url = `https://academics.newtonschool.co/api/v1/music/song?limit=100&filter={"mood":"excited"}`;
    const res = await fetch(url, {
      headers: {
        projectId: "22pghva8m0p8",
      },
    }).then((data) => data.json());

    return res;
  }
);
export const getHappySong = createAsyncThunk(
  "songs/getHappySong",
  async (thunkAPI) => {
    const url = `https://academics.newtonschool.co/api/v1/music/song?limit=100&filter={"mood":"happy"}`;
    const res = await fetch(url, {
      headers: {
        projectId: "22pghva8m0p8",
      },
    }).then((data) => data.json());

    return res;
  }
);
export const getSearch = createAsyncThunk(
  "songs/getSearch",
  async (searchInput) => {
    const url = `https://academics.newtonschool.co/api/v1/music/song?filter={"title":"${searchInput}"}`;
    const res = await fetch(url, {
      headers: {
        projectId: "22pghva8m0p8",
      },
    }).then((data) => data.json());

    return res;
  }
);
export const getLike = createAsyncThunk("songs/getLike", async (showId) => {
  console.log("getliked", showId);
  const token = localStorage.getItem("token");
  console.log("token", token);
  const res = await axios
    .patch(
      "https://academics.newtonschool.co/api/v1/music/favorites/like",
      { showId: showId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          projectId: "22pghva8m0p8",
        },
      }
    )
    .then((data) => data.json());

  return res;
});

const initialState = {
  songsList: [],
  currentSongUrl: {},
  addToRecent: [],
  showMusicPlayer: false,
  // likedSong:[],
};

export const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setCurrentSongUrl: (state, { payload }) => {
      state.currentSongUrl = payload;
    },
    setShowMusicPlayer: (state, { payload }) => {
      state.showMusicPlayer = payload;
    },
    setAddToRecent: (state, { payload }) => {
      state.addToRecent = [...state.addToRecent, ...payload];
    },
  },

  extraReducers: {
    [getSongsList.fulfilled]: (state, { payload }) => {
      state.songsList = payload.data;
    },
    [getRomanticSong.fulfilled]: (state, { payload }) => {
      state.songsList = payload.data;
    },
    [getSadSong.fulfilled]: (state, { payload }) => {
      state.songsList = payload.data;
    },
    [getExcitedSong.fulfilled]: (state, { payload }) => {
      state.songsList = payload.data;
    },
    [getHappySong.fulfilled]: (state, { payload }) => {
      state.songsList = payload.data;
    },
    [getSearch.fulfilled]: (state, { payload }) => {
      state.songsList = payload.data;
    },
    // [getLike.fulfilled]: (state, { payload }) => {
    //   state.likedSong = payload.data;
    // },
  },
});

export const { setCurrentSongUrl, setShowMusicPlayer, setAddToRecent } =
  songsSlice.actions;

export default songsSlice.reducer;
