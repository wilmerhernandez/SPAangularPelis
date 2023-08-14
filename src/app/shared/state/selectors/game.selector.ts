import { createSelector } from "@ngrx/store";

export const selectmovies = (state:any) => state.movies;

export const selectormovies = createSelector(selectmovies,(state:any)=> state.movies);

export const selectDetailmovie = (state:any) => state.movie;

export const selectorDetailsmovies = createSelector(selectDetailmovie,(state:any)=> state.movie);