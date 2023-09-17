import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptSuggestion = () => {

  const { showGptSearch, movieNames, movieResult } = useSelector((store) => store.gpt);
  console.log(showGptSearch)
  if(!movieNames) {return <div className="text-center text-white p-2 font-semibold text-l" >Search Something.....</div>}
  return (
    <div className='-mt-96 rounded-lg relative z-10 p-4 m-10  bg-black text-white  bg-opacity-90'>
     <h1 className="text-center text-white p-2 font-semibold text-lg md:text-3xl">Suggested Movies</h1>
     <div >
    
      {movieNames.map((movieName,index)=>( 
      <MovieList key="movieName" 
      title={movieName} 
        movies={movieResult[index]}/>))}
     
     </div>
      </div>
  )
}

export default GptSuggestion