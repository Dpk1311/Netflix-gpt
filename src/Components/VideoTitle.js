import React from 'react'

const VideoTitle = ({overview,title}) => {
  return (
    <div className='w-screen aspect-video absolute pt-[10%] md:px-24 px-10 text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:block py-6 text-lg w-1/4'>{overview}</p>
        <div className='md:mt-0 mt-3'>
            <button className='bg-white text-black md:py-4 py-2 px-3 md:px-12 md:text-xl  rounded-lg'>Play</button>
            <button className='mx-2 bg-gray-500 text-white md:py-4 py-2 px-3 md:px-12 md:text-xl bg-opacity-50 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle