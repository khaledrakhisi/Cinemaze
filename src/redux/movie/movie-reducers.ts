import {
  EMovieActionTypes,
  IMovieRequestResult,
  TMovieDispatchType,
} from "./movie-types";

const INITIAL_STATE: IMovieRequestResult = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
  isLoading: false,
  error: "",
};

const movieReducer = (
  currentState: IMovieRequestResult = INITIAL_STATE,
  action: TMovieDispatchType
): IMovieRequestResult => {
  switch (action.type) {
    case EMovieActionTypes.MOVIES_FETCH_REQUEST:
      return {
        ...currentState,
        isLoading: true,
      };

    case EMovieActionTypes.MOVIES_FETCH_SUCCESS:
      return action.payload;

    case EMovieActionTypes.MOVIES_FETCH_FAILURE:
      return {
        page: 0,
        total_pages: 0,
        total_results: 0,
        isLoading: false,
        results: [],
        error: "error happend",
      };
    case EMovieActionTypes.MOVIES_TOGGLE_FAVOURITE: {
      const foundIndex = currentState.results.findIndex(
        (movie) => movie.id === action.payload
      );
      currentState.results[foundIndex].favourite =
        !currentState.results[foundIndex].favourite;
      return {
        ...currentState,
      };
    }

    default:
      return currentState;
  }
};

export default movieReducer;
