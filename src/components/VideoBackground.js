import React, { useEffect } from 'react'
import { Api_options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBackground = ({movie_id}) => {
  const trailerVideo=useSelector(store=>store.movies?.trailerVideo)
  console.log(trailerVideo?.key,"trailerVideo")
const dispatch=useDispatch()

//fetching trailer video and updating store uses a custom hook
  
    useMovieTrailer(movie_id)
    

   
  return (
    <div>
       <iframe width="560" height="315" src={`https://www.youtube.com/embed/dG91B3hHyY4?si=+${trailerVideo?.key}`} 
       title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >

        </iframe>
    </div>
  )
}

export default VideoBackground