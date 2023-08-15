import { createReducer, on } from '@ngrx/store';
import { Movie } from '../../interface/interfaces';
import { loadDetailsMovies, loadMovies } from '../actions/actionGames';

export const initialState: { movies: ReadonlyArray<Movie> } = { movies: [] };
export const initialStateDetail: { movies: any } = { movies: "" };

export const moviesReducer = createReducer(
  initialState,
  on(loadMovies, (state:any,{movies}) => {
    return { ...state ,movies};
  })
);

export const moviesDetailReducer = createReducer(
  initialStateDetail,
    on(loadDetailsMovies, (state:any,{movie}) => {
      return { ...state ,movie};
    })
  );
