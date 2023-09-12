import React from 'react'

const VideoTitle = ({title,overview}) => {
    
  return (
    <div className=' w-screen aspect-video absolute pt-[20%] px-24 text-white bg-gradient-to-r from-black '>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/3 '>{overview}</p>
        <div>
            <button className=' bg-white rounded-lg px-12 text-lg  p-2   text-black  bg-opacity-90 hover:bg-opacity-70'>▷ Play</button>
            <button className='mx-3 bg-gray-500  text-white rounded-lg px-12 text-lg  p-2 bg-opacity-90 hover:bg-opacity-70 '>ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle