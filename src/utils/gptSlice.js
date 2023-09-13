import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:"gpt",
    initialState:{
     showGptSearch:false
    },
    reducers:{
        toggleGptSearchButton:(state)=>{
      console.log("first")
      state.showGptSearch = ! state.showGptSearch
     }
    }
})
export default gptSlice.reducer


export const {toggleGptSearchButton} =gptSlice.actions