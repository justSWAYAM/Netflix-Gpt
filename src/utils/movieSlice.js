import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
   name: "movies",
   initialState: {
    NowPlayingMovies : null,
   },
   reducers : {
    addNowPlayingMovies : (state,action) => {
        state.NowPlayingMovies = action.payload;
    },
    addTrailerVideo : (state,action) => {
        state.trailerVideo = action.payload;
   },
},
});

export const { addNowPlayingMovies , addTrailerVideo} = movieSlice.actions;

export default movieSlice.reducer;
