import IMovie from "../../types/movie";

export enum EMovieActionTypes {
  MOVIES_FETCH_REQUEST = "MOVIES_FETCH_REQUEST",
  MOVIES_FETCH_SUCCESS = "MOVIES_FETCH_SUCCESS",
  MOVIES_FETCH_FAILURE = "MOVIES_FETCH_FAILURE",
  MOVIES_TOGGLE_FAVOURITE = "MOVIES_TOGGLE_FAVOURITE",
}

export interface IMovieRequestResult {
  page: number;
  results: Array<IMovie>;
  total_pages: number;
  total_results: number;
  isLoading: boolean;
  error: string;
}

export interface IMovieFavoritesList {
  movies: Array<IMovie>;
  total: number;
}

export interface IMovieRequest {
  type: typeof EMovieActionTypes.MOVIES_FETCH_REQUEST;
}
export interface IMovieSuccess {
  type: typeof EMovieActionTypes.MOVIES_FETCH_SUCCESS;
  payload: IMovieRequestResult;
}
export interface IMovieFailure {
  type: typeof EMovieActionTypes.MOVIES_FETCH_FAILURE;
}
export interface IMovieToggleFavourite {
  type: typeof EMovieActionTypes.MOVIES_TOGGLE_FAVOURITE;
  payload: string;
}

export type TMovieDispatchType =
  | IMovieRequest
  | IMovieSuccess
  | IMovieFailure
  | IMovieToggleFavourite;
