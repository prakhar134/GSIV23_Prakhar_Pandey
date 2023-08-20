import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { getMovieDetails } from '../actions/movieAction'
import { MOVIE_POSTER_LINK } from '../constants'
import "./Details.css"
import Header from '../components/Header'

const Details = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const details = useSelector((state) => state.movies?.details);
  
  useEffect(() => {
    if(params?.id){
      fetchDetails()
    }
  }, [])
  function fetchDetails(){
    dispatch(getMovieDetails(params?.id));
  }
  return (
    <div className='details'>
      <Header showInput={false}/>
      <div className='details_container'>
        <div className='movie_image'>
          <img className='img' src={`${MOVIE_POSTER_LINK}${details?.poster_path}`} alt={details?.title}/>
        </div>
        <div className='content'>
          <h2 className='content_heading'>{details?.title} {`(`}{details?.vote_average?.toFixed(1)}{`)`}</h2>
          <p className='content_details'>{new Date(details?.release_date)?.getFullYear()} | {Math.floor(details?.runtime/60)} HH : {details?.runtime%60} MM | Director</p>
          <p className='content_description'>Description: {details?.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default Details