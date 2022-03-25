import { Dispatch } from "redux";

import { EMovieActionTypes, TMovieDispatchType } from "./movie-types";

export const getMovies =
  (queryString: string) => async (dispatch: Dispatch<TMovieDispatchType>) => {
    try {
      dispatch({
        type: EMovieActionTypes.MOVIES_FETCH_REQUEST,
      });

      const pageNumber = "1";
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}?api_key=${process.env.REACT_APP_API_KEY}&language=${process.env.REACT_APP_API_LANGUAGE}&query=${queryString}&page=${pageNumber}&include_adult=false`
      );
      const data = await response.json();

      dispatch({
        type: EMovieActionTypes.MOVIES_FETCH_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: EMovieActionTypes.MOVIES_FETCH_FAILURE,
      });
    }
  };
