import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  addPostModal: false,
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
  },
});

export const { addToken, toggleAddPostModal } = serviceSlice.actions;

export default serviceSlice.reducer;
