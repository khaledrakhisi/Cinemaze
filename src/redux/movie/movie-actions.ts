import { Dispatch } from "redux";
import { EMovieActionTypes, TMovieDispatchType } from "./movie-types";

export const getMovies =
  (s_query: string) => async (dispatch: Dispatch<TMovieDispatchType>) => {
    try {
      dispatch({
        type: EMovieActionTypes.MOVIES_FETCH_REQUEST,
      });

      const API_KEY = "0711939789d03a8c0a723db295e9f198";
      const API_LANGUAGE = "en-US";
      const n_pageNumber = "1";
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${API_LANGUAGE}&query=${s_query}&page=${n_pageNumber}&include_adult=false`
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
