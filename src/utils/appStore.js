import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import RecommendReducer from "./RecommendSlice";
const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        recommend : RecommendReducer,
    },
});

export default appStore;
