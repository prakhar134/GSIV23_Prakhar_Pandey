import React, { useEffect, useState, useRef } from 'react'
import Header from '../components/Header'
import Movies from '../components/Movies'
import {useDispatch, useSelector} from "react-redux"
import { clearSearchMovies, fetchMovies, searchMovie } from '../actions/movieAction'
import "./List.css"
import { REMOVE_MOVIES, REMOVE_SEARCH_MOVIES } from '../actions/type'

const List = () => {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies?.movies);
  const totalPages = useSelector((state) => state.movies?.totalPages);
  const searchMovies = useSelector((state) => state.movies?.searchMovies);
  const [page, setPage] = useState(1)
  const [searchMoviePage, setSearchMoviePage] = useState(1)
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if(!searchMovies.length){
      getMovies()
    } else {
      getSearchMovies()
    }
  }, [page, searchMoviePage])

  useEffect(() => {
    if(searchText === '' && searchMovies?.length){
      removeSearchMovies()
    }
  }, [searchText])
  useEffect(() => {
    return () => {
      dispatch({type: REMOVE_MOVIES})
      dispatch({type: REMOVE_SEARCH_MOVIES})
    }
  }, [])
  
  function getMovies() {
    dispatch(fetchMovies(page));
  }

  function getSearchMovies(){
    dispatch(searchMovie(searchText, searchMoviePage));
  }

  function removeSearchMovies(){
    setSearchMoviePage(1);
    dispatch({type: REMOVE_SEARCH_MOVIES});
  }
  
  return (
    <div className='container'>
      <Header 
        removeSearchMovies={removeSearchMovies} 
        getSearchMovies={getSearchMovies} 
        searchText={searchText} 
        setSearchText={setSearchText}
      />
      <Movies 
        movies={searchMovies.length ? searchMovies : movies}
        page={page}
        totalPages={totalPages}
        setSearchMoviePage={setSearchMoviePage}
        setPage={setPage}
        searchText={searchText} 
        searchMoviePage={searchMoviePage}
      />
    </div>
  )
}

export default List