import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
         state.nowPlayingMovies= action.payload
        }
    }
})


export default movieSlice.reducer
export const {addNowPlayingMovie} =movieSlice.actions