import React, { useEffect } from 'react'
import MovieCard from './MovieCard'
import "./Movies.css"

const Movies = ({movies, page, setPage, totalPages, searchText, searchMoviePage, setSearchMoviePage}) => {
  const intersectionObserver = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio <= 0) return;
    if(searchText){
      setSearchMoviePage(searchMoviePage + 1);
    } else {
      setPage(page + 1);
    }

  });
  useEffect(() => {
    if(document.getElementById('loadMoreData')){
      intersectionObserver.observe(document.getElementById('loadMoreData'))
    }
  }, [movies])

  function endOfPages(){
    if(searchText){
      return searchMoviePage !== totalPages
    } else {
      return  page !== totalPages
    }
  }
  
  return (
    <div className='movie_list'>{movies.map((movie, idx) => (
      <React.Fragment key={movie.id}>
        <MovieCard movieData={movie} />
        {(idx === movies.length - 2 && endOfPages()) && <div id="loadMoreData"></div>}
      </React.Fragment>
    ))}
    </div>
  )
}

export default Movies