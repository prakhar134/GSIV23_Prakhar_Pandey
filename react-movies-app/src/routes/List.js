import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Movies from '../components/Movies'
import {useDispatch, useSelector} from "react-redux"
import { fetchMovies } from '../actions/movieAction'
import "./List.css"

const List = () => {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies?.movies);
  const [page, setPage] = useState(1)
  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [])
  
  return (
    <div className='container'>
      <Header/>
      <Movies movies={movies} setPage={setPage}/>
    </div>
  )
}

export default List