import React from 'react'
import { MOVIE_POSTER_LINK } from '../constants'
import './MovieCard.css'

const MovieCard = ({movieData}) => {
  return (
    <div className='card'>
        <div className='card_img'>
          <img className='image' alt={movieData?.title} loading='lazy' src={`${MOVIE_POSTER_LINK}${movieData?.poster_path}`}/>
        </div>
        <div className='card_data'>
          <div className='card_data_header'>
            <p className='ellipses card_data_title'>{movieData?.title}</p>
            <p className='rating'>{movieData?.vote_average}</p>
          </div>
          <p className='ellipses card_data_overview'>{movieData?.overview}</p>
        </div>
    </div>
  )
}

export default MovieCard