import IMovie from "../../types/movie";

export enum ESaveListsActionTypes {
  FAVOURITE_ADD_TO_LIST = "FAVOURITE_ADD_TO_LIST",
  WATCHLATER_ADD_TO_LIST = "WATCHLATER_ADD_TO_LIST",
}

export interface ISaveListState {
  favouriteList: Array<IMovie>;
  watchLaterList: Array<IMovie>;
}

export type TSaveListDispatchAction = {
  type: ESaveListsActionTypes;
  payload: IMovie;
};
