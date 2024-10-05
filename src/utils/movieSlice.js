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
   addPopularMovies : (state,action) => {
         state.PopularMovies = action.payload;
   },
   addTopRatedMovies : (state,action) => {
    state.TopRatedMovies = action.payload;
},
addUpcomingMovies : (state,action) => {
    state.UpcomingMovies = action.payload;
},
},
});

export const { addNowPlayingMovies , addTrailerVideo , addPopularMovies , addTopRatedMovies , addUpcomingMovies} = movieSlice.actions;

export default movieSlice.reducer;
