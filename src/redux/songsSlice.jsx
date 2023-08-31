import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSongsList = createAsyncThunk(
  "songs/getSongsList",
  async (thunkAPI) => {
    const res = await fetch(
      "https://academics.newtonschool.co/api/v1/music/album",
      // "https://academics.newtonschool.co/api/v1/music/song",
      {
        headers: {
          projectId: "22pghva8m0p8",
        },
      }
    ).then((data) => data.json());

    return res;
  }
);


const initialState = {
  songsList: [],
};

export const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    // setSelectedMovieName: (state, {payload}) =>{
    //   state.selectedMovieName = payload;
    // }
  },
  //for calling api
  extraReducers: {
    [getSongsList.fulfilled]: (state, { payload }) => {
      state.songsList = payload.data;
    },
  
  },
});

// Action creators are generated for each case reducer function
export const {} = songsSlice.actions;

export default songsSlice.reducer;
