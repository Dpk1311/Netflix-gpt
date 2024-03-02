import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { LoginBackgroundImgURL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img
          src={LoginBackgroundImgURL}
          alt="background-img"
        />
      </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch