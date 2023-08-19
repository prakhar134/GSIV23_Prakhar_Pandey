import React from 'react'
import { MOVIE_POSTER_LINK } from '../constants'
import './MovieCard.css'

const MovieCard = ({movieData}) => {
  return (
    <div className='card'>
        <img className='image' alt={movieData?.title} loading='lazy' src={`${MOVIE_POSTER_LINK}${movieData?.poster_path}`}/>
        <div className='card_data'>
            <p>{movieData?.title}</p>
            <p>{movieData?.overview}</p>
        </div>
    </div>
  )
}

export default MovieCard