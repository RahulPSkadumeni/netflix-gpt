import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptSuggestion = () => {

  const {showGptSearch,movieNames,movieResult}=useSelector((store)=>store.gtp)
  if(!movieNames) return null
  return (
    <div>
     <h1 className="text-center">Suggested Movies</h1><br/>
     <div>
      <h1></h1>
      {movieNames.map((movieName,index)=>( 
      <MovieList key="movieName" 
      title={movieName} 
        movies={movieResult[index]}/>))}
     
     </div>
      </div>
  )
}

export default GptSuggestion