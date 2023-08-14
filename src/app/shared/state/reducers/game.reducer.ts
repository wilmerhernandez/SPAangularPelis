import { createReducer, on } from '@ngrx/store';
import { Movie } from '../../interface/interfaces';
import { loadDetailsMovies, loadMovies } from '../actions/actionGames';

export const initialstate: { movies: ReadonlyArray<Movie> } = { movies: [] };
export const initialstateDetail: { movies: any } = { movies: "" };

export const moviesReducer = createReducer(
  initialstate,
  on(loadMovies, (state:any,{movies}) => {
    return { ...state ,movies};
  })
);

export const moviesDetailReducer = createReducer(
    initialstateDetail,
    on(loadDetailsMovies, (state:any,{movie}) => {
      return { ...state ,movie};
    })
  );
