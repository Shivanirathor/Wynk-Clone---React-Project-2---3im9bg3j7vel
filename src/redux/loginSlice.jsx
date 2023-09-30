import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getLogin = createAsyncThunk("login/getLogin", async (payload) => {
  const res = await axios
    .post(
      "https://academics.newtonschool.co/api/v1/user/login",
      {
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

  localStorage.setItem("token", res.data.token);
  // localStorage.setItem("email", res.data.email);
  // localStorage.setItem("password", res.data.password);
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
  showLoginAlert: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUpdateFalse: (state) => {
      state.isUpdate = false;
    },

    setLoginFalse: (state) => {
      state.isLogin = false;
    },
   
    setLoginAlert: (state) => {
      state.showLoginAlert = false;
    },

    clearLoginError:(state)=>{
      state.loginError="";
    },
    clearRegisterError:(state)=>{
      state.registerError="";
    },
    clearUserData:(state)=>{
      state.isLogin = false;
    }
  },

  extraReducers: {
    [getRegister.fulfilled]: (state) => {
      state.isRegister = true;
    },
    [getRegister.rejected]: (state) => {
      state.registerError = "Invalid Register detailes";
    },
    [getLogin.fulfilled]: (state, action) => {
      state.isLogin = true;
      state.showLoginAlert = true;
      state.name = action.payload.data.data.name;
    },
    [getLogin.rejected]: (state) => {
      state.loginError = "Invalid Login Detailes, Try Again";
    },
    [getUpdate.fulfilled]: (state) => {
      state.isUpdate = true;
    },
  },
});

export const { setUpdateFalse, setLoginFalse, setLoginAlert ,clearLoginError,clearRegisterError,clearUserData} =
  loginSlice.actions;
export default loginSlice.reducer;
