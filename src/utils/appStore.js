import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies:moviesReducer
  }, // TODO add reducers here.
});

export default appStore;
