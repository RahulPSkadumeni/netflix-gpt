import React, { useEffect } from "react";
import Header from "./Header";
import { Api_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import {  addNowPlayingMovie } from "../utils/movieSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

const dispatch=useDispatch()
//fetch movie from TMDB and update store  //browse component has lot of code so extracting codes to out side

//creating  custom hook and add codes to it
//   const getNowPlaying =async()=>{
//   const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', Api_options)
//   const response = await data.json()
//   console.log(response.results)
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

      <MainContainer/>
      <SecondaryContainer/>
     
    </div>
  );
};

export default Browse;
