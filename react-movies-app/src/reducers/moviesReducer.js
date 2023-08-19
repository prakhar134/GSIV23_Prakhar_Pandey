import { FETCH_MOVIES, REMOVE_SEARCH_MOVIES, SEARCH_MOVIE } from "../actions/type";

const initialState = {
    movies: [],
    totalPages: null,
    searchMovies: []
  };

  const moviesReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_MOVIES:
            state.movies = state.movies.concat(action.payload?.results)
            state.totalPages = action.payload?.total_pages
            return Object.assign({}, state);
        
        case SEARCH_MOVIE:
          state.searchMovies = state.searchMovies.concat(action.payload?.results)
          state.totalPages = action.payload?.total_pages
          return Object.assign({}, state);

        case REMOVE_SEARCH_MOVIES:
          state.searchMovies = [];
          return Object.assign({}, state);
        
          default:
            return state;
    }
  }

  export default moviesReducer