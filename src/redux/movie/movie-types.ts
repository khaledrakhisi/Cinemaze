import IMovie from "../../types/movie";

export enum EMovieSearchActionTypes {
  MOVIES_SEARCH_FETCH_REQUEST = "MOVIES_SEARCH_FETCH_REQUEST",
  MOVIES_SEARCH_FETCH_SUCCESS = "MOVIES_SEARCH_FETCH_SUCCESS",
  MOVIES_SEARCH_FETCH_FAILURE = "MOVIES_SEARCH_FETCH_FAILURE",
}
export enum EMovieDetailsActionTypes {
  MOVIES_DETAILS_FETCH_REQUEST = "MOVIES_DETAILS_FETCH_REQUEST",
  MOVIES_DETAILS_FETCH_SUCCESS = "MOVIES_DETAILS_FETCH_SUCCESS",
  MOVIES_DETAILS_FETCH_FAILURE = "MOVIES_DETAILS_FETCH_FAILURE",
}

export interface IMovieSearchRequestResult {
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

export interface IMoviesSearchRequest {
  type: typeof EMovieSearchActionTypes.MOVIES_SEARCH_FETCH_REQUEST;
}
export interface IMoviesSearchSuccess {
  type: typeof EMovieSearchActionTypes.MOVIES_SEARCH_FETCH_SUCCESS;
  payload: IMovieSearchRequestResult;
}
export interface IMoviesSearchFailure {
  type: typeof EMovieSearchActionTypes.MOVIES_SEARCH_FETCH_FAILURE;
}

export type TMoviesSearchDispatchType =
  | IMoviesSearchRequest
  | IMoviesSearchSuccess
  | IMoviesSearchFailure;

export interface IMovieDetailsRequestResult extends IMovie {
  isLoading: boolean;
  error: string;
}
export interface IMoviesDetailsRequest {
  type: typeof EMovieDetailsActionTypes.MOVIES_DETAILS_FETCH_REQUEST;
}
export interface IMoviesDetailsSuccess {
  type: typeof EMovieDetailsActionTypes.MOVIES_DETAILS_FETCH_SUCCESS;
  payload: IMovieDetailsRequestResult;
}
export interface IMoviesDetailsFailure {
  type: typeof EMovieDetailsActionTypes.MOVIES_DETAILS_FETCH_FAILURE;
}

export type TMovieDetailsDispatchType =
  | IMoviesDetailsRequest
  | IMoviesDetailsSuccess
  | IMoviesDetailsFailure;
