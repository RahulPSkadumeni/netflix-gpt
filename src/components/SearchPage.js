import React, { useRef, useState } from 'react'
import { Form } from 'react-router-dom'
import openai from '../utils/openai'
import MovieCard from './MovieCard';
import MovieList from './MovieList';

const SearchPage = () => {
const searchText=useRef()
const[text,setText]=useState('')
console.log(text)
const [searchResult,setSearchResult]=useState([])
const openAISKey="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"
    const handleSearch =async()=>{
        console.log(searchText.current.value)
      const   gptQuery=searchText.current.value
        const search_Result=await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery}],
            model: 'gpt-3.5-turbo',
          });
      
          console.log(search_Result.choices?.[0]?.message?.content)
          setSearchResult(search_Result.choices?.[0]?.message?.content)

    }
   
    console.log("length",searchResult.length)

    // const handleChange=(e)=>{
    //     setText(e.target.value)
    //     console.log(text)
    // }
   
  return (




  
    <div className='  h-screen min-w-full    bg-gray-500 flex justify-center'>
        <Form className= ' flex-col w-1/2 h-full ' onSubmit={(e)=>e.preventDefault()}>
            <input type='text' ref={searchText}  className='pl-1 w-96 bg-gray-100 m-4 h-16 rounded-lg  c' placeholder='what you want to watch'/> 
            {/* <input onChange={handleChange} value={text}  type="text"/> */}
            <button className=' font-semibold bg-emerald-600  h-16 rounded-lg m-4 text-white w-64' onClick={handleSearch}>Submit</button>
           
        </Form>


        {searchResult.length>0 && (<MovieList title={"Suggestions"} movies={searchResult}/>)}




    </div>
  )
}

export default SearchPage