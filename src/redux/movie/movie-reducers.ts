import {
  EMovieDetailsActionTypes,
  EMovieSearchActionTypes,
  IMovieDetailsRequestResult,
  IMovieSearchRequestResult,
  TMovieDetailsDispatchType,
  TMoviesSearchDispatchType,
} from "./movie-types";

const SEARCH_INITIAL_STATE: IMovieSearchRequestResult = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
  isLoading: false,
  error: "",
};

const movieSearchReducer = (
  currentState: IMovieSearchRequestResult = SEARCH_INITIAL_STATE,
  action: TMoviesSearchDispatchType
): IMovieSearchRequestResult => {
  switch (action.type) {
    case EMovieSearchActionTypes.MOVIES_SEARCH_FETCH_REQUEST:
      return {
        ...currentState,
        isLoading: true,
      };

    case EMovieSearchActionTypes.MOVIES_SEARCH_FETCH_SUCCESS:
      return action.payload;

    case EMovieSearchActionTypes.MOVIES_NEXTPAGE_FETCH_SUCCESS:
      return {
        ...action.payload,
        results: [...currentState.results, ...action.payload.results],
      };

    case EMovieSearchActionTypes.MOVIES_SEARCH_FETCH_FAILURE:
      return {
        page: 0,
        total_pages: 0,
        total_results: 0,
        isLoading: false,
        results: [],
        error: "error happend",
      };

    default:
      return currentState;
  }
};

const DETAILS_INITIAL_STATE: IMovieDetailsRequestResult = {
  id: "",
  media_type: "",
  original_name: "",
  overview: "",
  poster_path: "",
  release_date: "",
  title: "",
  vote_average: 0,
  vote_count: 0,
  isLoading: false,
  error: "",
};

const movieDetailReducer = (
  currentState: IMovieDetailsRequestResult = DETAILS_INITIAL_STATE,
  action: TMovieDetailsDispatchType
): IMovieDetailsRequestResult => {
  switch (action.type) {
    case EMovieDetailsActionTypes.MOVIES_DETAILS_FETCH_REQUEST:
      return {
        ...currentState,
        isLoading: true,
      };

    case EMovieDetailsActionTypes.MOVIES_DETAILS_FETCH_SUCCESS:
      return action.payload;

    case EMovieDetailsActionTypes.MOVIES_DETAILS_FETCH_FAILURE:
      return {
        ...currentState,
        isLoading: false,
        error: "error happend",
      };

    default:
      return currentState;
  }
};

export { movieDetailReducer, movieSearchReducer };
