import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Movies from '../components/Movies'
import {useDispatch, useSelector} from "react-redux"
import { fetchMovies } from '../actions/movieAction'
import "./List.css"

const List = () => {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies?.movies);
  const totalPages = useSelector((state) => state.movies?.totalPages);
  const [page, setPage] = useState(1)
  useEffect(() => {
    if(page>=1){
      getData()
    }
  }, [page])

  function getData() {
    dispatch(fetchMovies(page));
  }
  
  return (
    <div className='container'>
      <Header/>
      <Movies movies={movies} page={page} totalPages={totalPages} setPage={setPage}/>
    </div>
  )
}

export default List