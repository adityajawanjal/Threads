import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  addPostModal: false,
  combinePosts: [],
  myself:{}
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
    addMyself:(state,action)=>{
      state.myself = action.payload;
    }
  },
});

export const { addToken, toggleAddPostModal, addToPost , addMyself } = serviceSlice.actions;

export default serviceSlice.reducer;
