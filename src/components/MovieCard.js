import React from 'react'
import { TMDB_Image_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
   
  return (
    <div className='w-44 pr-4'>
        <img src={TMDB_Image_CDN+posterPath} alt="movie card" />
    </div>
  )
}

export default MovieCard