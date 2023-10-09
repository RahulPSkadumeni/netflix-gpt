import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptSuggestion from './GptSuggestion';
import { BackgroundImg } from '../utils/constants';

const GptSearchPage = () => {

 /*
 2 component 
    - gpt search bar and
    - gpt movie suggestion

*/ 
  return (
    <div>
        <div className="fixed  -z-10  ">
        <img className='h-screen sm:w-screen object-cover'
          src={BackgroundImg}
          alt=""
        />
      </div >
      <div className=''>
      <GptSearchBar/>
      <GptSuggestion/>
      </div>
    </div>
  ) 
}

export default GptSearchPage