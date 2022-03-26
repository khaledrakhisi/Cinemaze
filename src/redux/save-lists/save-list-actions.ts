import IMovie from "../../types/movie";

import { ESaveListsActionTypes } from "./save-list-types";

export const addToFavouritesList = (movie: IMovie) => {
  return {
    type: ESaveListsActionTypes.FAVOURITE_ADDREMOVE_TO_LIST,
    payload: movie,
  };
};

export const addToWatchLaterList = (movie: IMovie) => {
  return {
    type: ESaveListsActionTypes.WATCHLATER_ADDREMOVE_TO_LIST,
    payload: movie,
  };
};
