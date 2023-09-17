import React from 'react'
import { TMDB_Image_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
   if(!posterPath)return null
  return (
    <div className='w-36 md:w-44 pr-4 '>
        <img src={TMDB_Image_CDN+posterPath} alt="movie card" />
    </div>
  )
}

export default MovieCard