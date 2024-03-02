import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center '>
        
        <form className='m-4 p-4 w-1/2 bg-black grid grid-cols-12'>
            <input type='text' className='m-3 p-3 col-span-8' placeholder='Search your favourite movies here...'/>
            <button className='bg-red-700 text-white rounded-lg p-2 m-2 col-span-4 '>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar