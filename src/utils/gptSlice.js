import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:"gpt",
    initialState:{
     showGptSearch:false,
     movieNames:null,
     movieResult:null  //ins ths 2 results , movie name and movie result
    },
    reducers:{
        toggleGptSearchButton:(state)=>{
      console.log("first")
      state.showGptSearch = ! state.showGptSearch
     },

     addGptMoviesResult:(state,action)=>{
      
        const {movieNames, movieResult}=action.payload  
        console.log("payload",action.payload)// pay load containing 2 things, movie name and movie result
        state.movieNames=movieNames;
        state.movieResult=movieResult;
     },
   
    }
})
export default gptSlice.reducer


export const {toggleGptSearchButton,addGptMoviesResult,addGptSearchResult} =gptSlice.actions