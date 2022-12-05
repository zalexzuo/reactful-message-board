import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: localStorage.getItem("userInfo") !== null ? true : false,
};

// console.log("isLogin: " + initialState);

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLogin(state) {
      state = true;
    },
    userLogout(state) {
      state = false;
    },
  },
});

export const LoginActions = LoginSlice.actions;
export default LoginSlice.reducer;
