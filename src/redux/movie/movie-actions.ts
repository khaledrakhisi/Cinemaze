import { Dispatch } from "redux";
import { fetchWithTimeout } from "../../utils/util";

import {
  EMovieDetailsActionTypes,
  EMovieSearchActionTypes,
  TMovieDetailsDispatchType,
  TMoviesSearchDispatchType,
} from "./movie-types";

export const getMovies =
  (queryString: string) =>
  async (dispatch: Dispatch<TMoviesSearchDispatchType>) => {
    try {
      dispatch({
        type: EMovieSearchActionTypes.MOVIES_SEARCH_FETCH_REQUEST,
      });

      const pageNumber = "1";
      const response = await fetchWithTimeout(
        `${process.env.REACT_APP_API_URL}?api_key=${process.env.REACT_APP_API_KEY}&language=${process.env.REACT_APP_API_LANGUAGE}&query=${queryString}&page=${pageNumber}&include_adult=false`
      );
      const data = await response.json();

      dispatch({
        type: EMovieSearchActionTypes.MOVIES_SEARCH_FETCH_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: EMovieSearchActionTypes.MOVIES_SEARCH_FETCH_FAILURE,
      });
    }
  };

export const getMovieDetails =
  (movieId: string) =>
  async (dispatch: Dispatch<TMovieDetailsDispatchType>) => {
    try {
      dispatch({
        type: EMovieDetailsActionTypes.MOVIES_DETAILS_FETCH_REQUEST,
      });

      const response = await fetchWithTimeout(
        `${process.env.REACT_APP_API_DETAIL_URL}/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=${process.env.REACT_APP_API_LANGUAGE}&append_to_response=videos`
      );
      const data = await response.json();

      dispatch({
        type: EMovieDetailsActionTypes.MOVIES_DETAILS_FETCH_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: EMovieDetailsActionTypes.MOVIES_DETAILS_FETCH_FAILURE,
      });
    }
  };
