import React, { useEffect } from "react";
import Header from "./Header";
import { Api_options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {  addNowPlayingMovie } from "../utils/movieSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";

const Browse = () => {

const dispatch=useDispatch()
const isShowGptSearch=useSelector((store)=>store.gpt.showGptSearch)
console.log(isShowGptSearch)
//fetch movie from TMDB and update store  //browse component has lot of code so extracting codes to out side

//creating  custom hook and add codes to it
//   const getNowPlaying =async()=>{
//   const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', Api_options)
//   const response = await data.json()
//  
//   dispatch(addNowPlayingMovie(response.results))
 
 
  
// }
// useEffect(() => {
//   getNowPlaying()
 
//   return () => {
  
//   }
// }, [])
useNowPlayingMovies( )

  return (
    <div>
      <Header />
      {/*      structure
        //main video containerp
                    // video background
                    // movie inf0
        //secondary  container
             // diff movie list*n
                  - cards *n
             */
      }

      {/* /* when click GPT Search button show GPT-search component otherwise main container and secondary container
      */ }
     {isShowGptSearch ? (<GptSearch/>):
       (<><MainContainer/>
       <SecondaryContainer/></>)}
    
     
    </div>
  );
};

export default Browse;
