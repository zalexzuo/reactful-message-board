import { configureStore, combineReducers } from "@reduxjs/toolkit";

import LoginSlice from "./LoginSlice";
// import ThemeSlice from "./ThemeSlice";

// use "state.[keyName].[reducerName]" to access the values
const rootRudeucer = combineReducers({
  login: LoginSlice,
  // theme: ThemeSlice,
});

const store = configureStore({
  reducer: rootRudeucer,
  // LoginSlice,
  // ThemeSlice,
  // { login: LoginSlice.reducer, theme: ThemeSlice.reducer },
});

export default store;
