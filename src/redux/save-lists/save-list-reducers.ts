import IMovie from "../../types/movie";

import {
  ESaveListsActionTypes,
  ISaveListState,
  TSaveListDispatchAction,
} from "./save-list-types";

const INITIAL_STATE: ISaveListState = {
  favouriteList: [],
  watchLaterList: [],
};

const saveListReducer = (
  currentState: ISaveListState = INITIAL_STATE,
  action: TSaveListDispatchAction
): ISaveListState => {
  switch (action.type) {
    case ESaveListsActionTypes.FAVOURITE_ADDREMOVE_TO_LIST: {
      const itemExist: IMovie | undefined = currentState.favouriteList.find(
        (item) => item.id === action.payload.id
      );

      let updatedList: Array<IMovie> = currentState.favouriteList;

      if (!itemExist) {
        updatedList.push(action.payload);
        updatedList = updatedList.sort((a, b) => {
          const fa = a.title.toLowerCase();
          const fb = b.title.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
      } else if (itemExist) {
        updatedList = updatedList.filter(
          (item) => item.id !== action.payload.id
        );
      }
      return {
        ...currentState,
        favouriteList: updatedList,
      };
    }
    case ESaveListsActionTypes.WATCHLATER_ADDREMOVE_TO_LIST: {
      const itemExist: IMovie | undefined = currentState.watchLaterList.find(
        (item) => item.id === action.payload.id
      );
      let updatedList: Array<IMovie> = currentState.watchLaterList;

      if (!itemExist) {
        updatedList.push(action.payload);
        updatedList = updatedList.sort((a, b) => {
          const fa = a.title.toLowerCase();
          const fb = b.title.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
      } else if (itemExist) {
        updatedList = updatedList.filter(
          (item) => item.id !== action.payload.id
        );
      }
      return {
        ...currentState,
        watchLaterList: updatedList,
      };
    }
    default:
      return currentState;
  }
};

export default saveListReducer;
