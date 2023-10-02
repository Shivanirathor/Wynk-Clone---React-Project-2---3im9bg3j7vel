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
  return res;
});

export const getRegister = createAsyncThunk(
  "login/getRegister",
  async (payload, { rejectWithValue }) => {
    try {
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
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
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
    setUpdateFalse: (state) => {
      state.isUpdate = false;
    },

    setLoginFalse: (state) => {
      state.isLogin = false;
    },

    
    clearLoginError: (state) => {
      state.loginError = "";
    },
    clearRegisterError: (state) => {
      state.registerError = "";
    },
    clearUserData: (state) => {
      state.isLogin = false;
    },
    clearRegistered: (state) => {
      state.isRegister = false;
    },
  },

  extraReducers: {
    [getRegister.fulfilled]: (state) => {
      state.isRegister = true;
      state.registerError = false;
    },
    [getRegister.rejected]: (state, action) => {
      state.registerError = action.payload || "Registered failed";
    },
    [getLogin.fulfilled]: (state, action) => {
      state.isLogin = true;
      state.showLoginAlert = true;
      state.name = action.payload.data.data.name;
    },
    [getLogin.rejected]: (state, action) => {
      state.loginError = action.payload || "Invalid Login Detailes, Try Again";
    },
    [getUpdate.fulfilled]: (state) => {
      state.isUpdate = true;
    },
  },
});

export const {
  setUpdateFalse,
  setLoginFalse,

  clearLoginError,
  clearRegisterError,
  clearUserData,
  clearRegistered,
} = loginSlice.actions;
export default loginSlice.reducer;
