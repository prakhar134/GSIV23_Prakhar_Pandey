import { FETCH_MOVIES, MOVIE_DETAILS, REMOVE_MOVIES, REMOVE_SEARCH_MOVIES, SEARCH_MOVIE } from "../actions/type";

const initialState = {
    movies: [],
    totalPages: null,
    searchMovies: [],
    details: {}
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

          case REMOVE_MOVIES:
          state.movies = [];
          return Object.assign({}, state);

        case MOVIE_DETAILS:
          state.details = action.payload;
          return Object.assign({}, state);
        
          default:
            return state;
    }
  }

  export default moviesReducer