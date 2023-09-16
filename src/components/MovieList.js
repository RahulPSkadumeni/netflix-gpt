import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {

  return (
  <div className='px-6'>
      <h1 className=' py-2 text-2xl font-medium text-white bg-opacity-70 '>{title}</h1>
 
    <div className='flex flex-col overflow-x-scroll  '>
    
      <div className='flex '>
      {       movies?.map((movie) =>(<div><MovieCard key={movie.id} posterPath={movie.poster_path}/></div>))}

      </div>
    </div>
    </div>
  )
}

export default MovieList