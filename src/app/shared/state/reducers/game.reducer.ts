import { createReducer, on } from '@ngrx/store';
import { Movie } from '../../interface/interfaces';
import { loadDetailsmovies, loadmovies } from '../actions/actionGames';

export const initialstate: { movies: ReadonlyArray<Movie> } = { movies: [] };
export const initialstateDetail: { movies: any } = { movies: "" };

export const moviesReducer = createReducer(
  initialstate,
  on(loadmovies, (state:any,{movies}) => {
    return { ...state ,movies};
  })
);

export const moviesDetailReducer = createReducer(
    initialstateDetail,
    on(loadDetailsmovies, (state:any,{movie}) => {
      return { ...state ,movie};
    })
  );
