import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getLogin = createAsyncThunk("login/getLogin", async (payload) => {
  const res = await axios
    .post(
      "https://academics.newtonschool.co/api/v1/user/login",
      {
        email: payload.name,
        password: payload.password,
        appType: "music",
      },

      {
        headers: {
          projectId: "22pghva8m0p8",
        },
      }
    )
    .then((data) => data);
  return res;
});
export const getRegister = createAsyncThunk(
  "login/getRegister",
  async (payload) => {
    const res = await axios
      .post(
        "https://academics.newtonschool.co/api/v1/user/signup",
        {
          name: payload.name,
          email: payload.email,
          password: payload.password,
          appType: "music",
        },

        {
          headers: {
            projectId: "22pghva8m0p8",
          },
        }
      )
      .then((data) => data);

    return res;
  }
);

const initialState = {
  isLogin: false,
  loginError: "",
  isRegister: false,
  registerError: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    // setSelectedMovieName: (state, {payload}) =>{
    //   state.selectedMovieName = payload;
    // }
  },

  extraReducers: {
    [getRegister.fulfilled]: (state) => {
      state.isRegister = true;
    },
    [getRegister.rejected]: (state) => {
      state.registerError = "Invalid Register detailes";
    },
    [getLogin.fulfilled]: (state) => {
      state.isLogin = true;
    },
    [getLogin.rejected]: (state) => {
      state.loginError = "Invalid Login Detailes, Try Again";
    },
  },
});

export const {} = loginSlice.actions;

export default loginSlice.reducer;
