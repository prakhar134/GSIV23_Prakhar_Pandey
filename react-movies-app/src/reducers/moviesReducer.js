import { FETCH_MOVIES } from "../actions/type";

const initialState = {
    movies: [],
    totalPages: null
  };

  const moviesReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_MOVIES:
            let _state = {...state};
            _state.movies = _state.movies.concat(action.payload?.results)
            _state.totalPages = action.payload?.total_pages
            return _state;
        default:
            return state;
    }
    return state
  }

  export default moviesReducer