import { createAction, props } from "@ngrx/store";
import { Movie } from "../../interface/interfaces";



export const showmovie = createAction("show movies array");
export const loadmovies = createAction("load movies array",props<{movies:Movie[]}>());

export const showDetailmovie = createAction("show movies array");
export const loadDetailsmovies = createAction("load movies array",props<{movie:Movie[]}>());
