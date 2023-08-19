import React from 'react'
import MovieCard from './MovieCard'
import "./Movies.css"

const Movies = ({movies, setPage}) => {
  return (
    <div className='movie_list'>{movies.map((movie) => <MovieCard key={movie.id} movieData={movie} />)}</div>
  )
}

export default Movies