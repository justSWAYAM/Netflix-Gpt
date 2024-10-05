
import { createSlice } from "@reduxjs/toolkit";

const RecommendSlice = createSlice({
    name : 'Recommend' ,
    initialState : {
    showRecommendations : false,
    movieResults : null,
    movieNames : null
    },

    reducers : {
        toggleRecommendations : (state, action) => {
            state.showRecommendations = !state.showRecommendations;
        },

        addGptMovieResult : (state, action) => {
            const {movieNames , movieResults} = action.payload;
            state.gptMovieResult = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
    },
});

export const { toggleRecommendations ,addGptMovieResult } = RecommendSlice.actions;

export default RecommendSlice.reducer