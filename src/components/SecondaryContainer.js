import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
const movies=useSelector((store)=>store.movies)

  /*
        * movie lists
           * -trending now
                      *-movie card * n

           *   -Now playing 
           *   -pOpular
*/
  return (
   movies && (<div className=' bg-black  '>
    <div className='-mt-72 relative z-10 '>
      
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Upcoming Movies "} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Horror "} movies={movies.nowPlayingMovies}/>
      </div>
    </div>)
  )
}

export default SecondaryContainer