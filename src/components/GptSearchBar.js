import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { useNavigate } from 'react-router-dom';
import { Api_options } from '../utils/constants';
import { addGptMoviesResult, addGptSearchResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const langKey=useSelector((store)=>store.config.language)
    const searchText=useRef(null)
    const navigate=useNavigate()

    const dispatch=useDispatch()

    const handleSubmit = async ()=>{
     // making api cal to  open ai and get a movie result 
      console.log("submitted",searchText.current.value)
      const gptQuery="Act as a movie recommendation system and suggest some movies  for the query : "+searchText.current.value+". only give me names of five movies, coma separated lake the example result given ahead. Example Result: Gadar, Sholy, Don, Jawan, Koi Mil Gaya "
      const GPT_result=await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery}],
        model: 'gpt-3.5-turbo',
      });
   if(!GPT_result.choices){
    console.log(Error)
   }
      console.log(GPT_result.choices?.[0]?.message?.content)
      const gpt_MovieList=GPT_result.choices?.[0]?.message?.content.split(",")
      // fetching each movies information from tmdb api
    
      //search for each movie in tmdb;
         let MovieResult=[]
        
         const promiseArray =  gpt_MovieList.map((movieName)=>(
           SearchMovieTMDB(movieName)
         ))
       const tmdbResults=  Promise.all(promiseArray)
         
       
       //adding multiple data into same action,
     
            dispatch(addGptMoviesResult({movieNames:gpt_MovieList,movieResults:tmdbResults}))
    }

    const SearchMovieTMDB=async(movieName)=>{
      const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movieName+"&include_adult=false&language=en-US&page=1", Api_options)
   const json=await data.json()
   return json.result
    }
  return (
    <div  className='pt-[10%]  h-screen  flex justify-center'>
<form action=" " onSubmit={(e)=> e.preventDefault()} className='w-1/2  grid grid-cols-12 '>
   
    <input type="text"  ref={searchText}  className='pl-1 bg-gray-100 m-4 h-16 rounded-lg  col-span-8' placeholder={lang[langKey].gptSearchPlaceholder} />
    <button onClick={handleSubmit}className=" font-semibold bg-emerald-600  h-16 rounded-lg m-4 text-white col-span-4" >{lang[langKey].search}</button>
</form>
        
    </div>
  )
}

export default GptSearchBar