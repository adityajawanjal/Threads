import { configureStore } from "@reduxjs/toolkit";
import { serverApi } from "./services";
import { setupListeners } from "@reduxjs/toolkit/query";
import serviceSlice from "./slice";

export const store = configureStore({
  reducer: {
    services:serviceSlice,
    [serverApi.reducerPath]: serverApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serverApi.middleware),
});
setupListeners(store.dispatch);
