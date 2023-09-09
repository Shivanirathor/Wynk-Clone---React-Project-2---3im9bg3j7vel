import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSongsList = createAsyncThunk(
  "songs/getSongsList",
  async (thunkAPI) => {
    const res = await fetch(
      // "https://academics.newtonschool.co/api/v1/music/album",
      "https://academics.newtonschool.co/api/v1/music/song",
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
    const url = `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"romantic"}`;
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
    const url = `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"sad"}`;
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
    const url = `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"excited"}`;
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
    const url = `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"happy"}`;
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

const initialState = {
  songsList: [],
  currentSongUrl: {},
  addToRecent: [],
  showMusicPlayer: false,
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
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentSongUrl, setShowMusicPlayer, setAddToRecent } =
  songsSlice.actions;

export default songsSlice.reducer;
