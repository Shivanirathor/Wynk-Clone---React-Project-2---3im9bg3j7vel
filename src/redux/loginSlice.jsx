import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getLogin = createAsyncThunk("login/getLogin", async (payload) => {
  const res = await axios
    .post(
      "https://academics.newtonschool.co/api/v1/user/login",
      {
        name: payload.name,
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

  localStorage.setItem("token", res.data.token);
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
export const getUpdate = createAsyncThunk(
  "login/getUpdate",
  async (payload) => {
    const token = localStorage.getItem("token");
    const res = await axios
      .patch(
        "https://academics.newtonschool.co/api/v1/user/updateMyPassword",
        {
          name: payload.name,
          email: payload.email,
          passwordCurrent: payload.currPassword,
          password: payload.password,
          appType: "music",
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
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
  name: "",
  isUpdate: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    // setSelectedMovieName: (state, {payload}) =>{
    //   state.selectedMovieName = payload;
    // }
    setUpdateFalse: (state) => {
      state.isUpdate = false;
    },

    loginSuccess: (state, action) => {
      state.isLogin = true;
      state.name = action.payload.name;
    },
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
    [getUpdate.fulfilled]: (state) => {
      state.isUpdate = true;
    },
  },
});

export const { setUpdateFalse, loginSuccess } = loginSlice.actions;
export default loginSlice.reducer;
