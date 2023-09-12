import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies)
    if(movies==null)return //if movies is not present then return  or it cause error
    const mainMovie=movies[0]
  
    const {original_title,overview,id}=mainMovie
    console.log(id)
  return (
    <div>
        <VideoBackground movie_id={id}/>
        <VideoTitle title={original_title} overview={overview}/>
    </div>
  )
}

export default MainContainer