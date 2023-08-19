import { MOVIE_LIST_API, MOVIE_SEARCH_API } from "../constants";
import { FETCH_MOVIES, REMOVE_SEARCH_MOVIES, SEARCH_MOVIE } from "./type";
import axios from "axios";

export const fetchMovies = (page) => async(dispatch) => {
    try {
        const res = await axios.get(`${MOVIE_LIST_API}api_key=38ea5e7c8561a585923cb35fd520dfa3&page=${page}`)
        dispatch({type: FETCH_MOVIES, payload: res.data})
    } catch (error) {
        console.error(error?.message)
    }
    
}

export const searchMovie = (query, page) => async(dispatch) => {
    try {
        const res = await axios.get(`${MOVIE_SEARCH_API}query=${query}&page=${page}&api_key=38ea5e7c8561a585923cb35fd520dfa3`)
        dispatch({type: SEARCH_MOVIE, payload: res.data})
    } catch (error) {
        console.error(error?.message);
    }
}

 export const clearSearchMovies = () => async(dispatch) =>{
    dispatch({type: REMOVE_SEARCH_MOVIES})
 }