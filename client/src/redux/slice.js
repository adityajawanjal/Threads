import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  addPostModal: false,
  combinePosts: [],
  myself: {},
  darkMode: "light",
};

export const serviceSlice = createSlice({
  name: "serviceSlice",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
    toggleAddPostModal: (state, action) => {
      state.addPostModal = action.payload;
    },
    addToPost: (state, action) => {
      let arr = [...state.combinePosts, ...action.payload];
      let uniqueArr = arr.filter(
        (obj, index, self) => index === self.findIndex((e) => e._id === obj._id)
      );
      state.combinePosts = uniqueArr;
    },
    updateAllPosts: (state, action) => {
      const updatedPost = action.payload;
      state.combinePosts = state.combinePosts.map((post) =>
        post._id === updatedPost._id ? updatedPost : post
      );
    },
    addMyself: (state, action) => {
      state.myself = action.payload;
    },
    toggleDarkMode: (state, action) => {
      if (state.darkMode === "light") {
        state.darkMode = "dark";
        return;
      }
      state.darkMode = "light";
    },
  },
});

export const {
  addToken,
  toggleAddPostModal,
  addToPost,
  addMyself,
  toggleDarkMode,
  updateAllPosts,
} = serviceSlice.actions;

export default serviceSlice.reducer;
