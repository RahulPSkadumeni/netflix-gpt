import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';
import useAiringToday from '../hooks/useAiringToday';

const SecondaryContainer = () => {
const movies=useSelector((store)=>store.movies)

  /*
        * movie lists
           * -trending now
                      *-movie card * n

           *   -Now playing 
           *   -pOpular
           * 
*/

usePopularMovies()
useTopRated()
useUpcoming()
useAiringToday()
  return (
   movies && (
    <div className='mt-0 lg:-mt-64 md:-mt-36 relative z-10  '>
      
      <MovieList  title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies "} movies={movies.upcomingMovies}/>
      <MovieList title={"Airing Today "} movies={movies.airingToday}/>
      </div>
    )
  )
}

export default SecondaryContainer