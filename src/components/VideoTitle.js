import React from 'react'

const VideoTitle = ({title,overview}) => {
    
  return (
    <div className=' w-screen aspect-video absolute pt-[20%] px-6 md:px-24 text-white bg-gradient-to-r from-black '>
        <h1 className='text-2xl md:text-6xl  font-bold'>{title}</h1>
        <p className='hidden lg:inline-block text-sm sm:text-sm md:text-lg w-1/2  overflow-hidden line-clamp-3'>
  {overview}
</p>

        <div className='flex flex-col w-1/4 my-2 md:my-0'>
            <button className=' bg-white rounded-lg px-2 py-2  md:px-12 text-lg   mt-3   text-black  bg-opacity-90 hover:bg-opacity-70'>▷ Play</button>
            <button className='hidden lg:inline-block mt-3 bg-gray-500  text-white rounded-lg px-2 py-2  md:px-12  text-lg   bg-opacity-90 hover:bg-opacity-70 '>ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle