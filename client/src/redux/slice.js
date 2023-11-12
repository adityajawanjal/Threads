import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

export const serviceSlice = createSlice({
  name: "serviceSlice",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { addToken } = serviceSlice.actions;

export default serviceSlice.reducer;
