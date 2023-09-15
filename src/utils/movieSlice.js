import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        airingToday:null
        
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
         state.nowPlayingMovies= action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload;
        },

        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
         addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        },
        addAiringToday:(state,action)=>{
            state.airingToday=action.payload
        }
        
    }
})


export default movieSlice.reducer
export const {addNowPlayingMovie,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addAiringToday} =movieSlice.actions