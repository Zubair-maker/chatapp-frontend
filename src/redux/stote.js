import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import api from "./rtk/api";
import uiSlice from "./reducers/uiSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [api.reducerPath]: api.reducer,
    ui: uiSlice.reducer,
  },
  middleware: (defMiddleware) => [...defMiddleware(), api.middleware],
});

export default store;
