import React, { useEffect } from 'react'
import { Api_options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBackground = ({movie_id}) => {
  const trailerVideo=useSelector(store=>store.movies?.trailerVideo)
  
const dispatch=useDispatch()

//fetching trailer video and updating store uses a custom hook
  
    useMovieTrailer(movie_id)
    

   
  return (
    <div>
       <iframe className='w-screen aspect-video '  src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"} 
       title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >

        </iframe>
    </div>
  )
}

export default VideoBackground