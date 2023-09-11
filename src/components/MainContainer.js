import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies)
    if(movies==null)return //if movies is not present then return  or it cause error
    const mainMovie=movies[0]
    console.log(mainMovie)
  return (
    <div>
        <VideoBackground/>
        <VideoTitle movie={mainMovie}/>
    </div>
  )
}

export default MainContainer