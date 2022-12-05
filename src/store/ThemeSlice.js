import { createSlice } from "@reduxjs/toolkit";

const getTheme = () => {
  if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", false);
    return false;
  } else {
    return localStorage.getItem("theme") == "true" ? true : false;
  }
};
const initialTheme = getTheme();
// console.log("initialTheme: " + initialTheme);

const initialState = {
  theme: initialTheme,
};

// console.log(initialState);

const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state = !state;
    },
  },
});

export const ThemeAction = ThemeSlice.actions;
export default ThemeSlice.reducer;
