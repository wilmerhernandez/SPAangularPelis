import { createAction, props } from "@ngrx/store";
import { Movie } from "../../interface/interfaces";



export const showMovie = createAction("show movies array");
export const loadMovies = createAction("load movies array",props<{movies:Movie[]}>());

export const showDetailMovie = createAction("show movies array");
export const loadDetailsMovies = createAction("load movies array",props<{movie:Movie[]}>());
