import React from 'react'
import { ImgURL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 pr-4">
      <img alt='MovieCard' src={ImgURL + posterPath}/>
    </div>
  )
}

export default MovieCard