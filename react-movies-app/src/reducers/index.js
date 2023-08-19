import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";

export const reducers = combineReducers({movies: moviesReducer});