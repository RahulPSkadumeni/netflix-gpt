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
        <div className="fixed -z-10  ">
        <img
          src={BackgroundImg}
          alt=""
        />
      </div >
      <GptSearchBar/>
      <GptSuggestion/>
    </div>
  )
}

export default GptSearchPage