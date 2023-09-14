import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    const langKey=useSelector((store)=>store.config.language)
    console.log(langKey)
  return (
    <div  className='pt-[10%]  h-screen  flex justify-center'>
<form action=" " className='w-1/2  grid grid-cols-12 '>
   
    <input type="text" className='pl-1 bg-gray-100 m-4 h-16 rounded-lg  col-span-8' placeholder={lang[langKey].gptSearchPlaceholder} />
    <button className=" font-semibold bg-emerald-600  h-16 rounded-lg m-4 text-white col-span-4" >{lang[langKey].search}</button>
</form>
        
    </div>
  )
}

export default GptSearchBar