import {
  EUIActions,
  EUITypes,
  IUIState,
  TUIDispatchAction,
  TUIInputDispatchAction,
} from "./ui-types";

const INITIAL_STATE: IUIState = {
  currentViewStyle: EUITypes.VIEW_STYLE_LISTVIEW,
  currentNavTab: EUITypes.NAV_TAB_SEARCH,
  inputSearchValue: "",
};

const viewStyleReducer = (
  currentState: IUIState = INITIAL_STATE,
  action: TUIDispatchAction & TUIInputDispatchAction
): IUIState => {
  switch (action.type) {
    case EUIActions.UI_VIEWSTYLE_CHANGED:
      return {
        ...currentState,
        currentViewStyle: action.payload,
      };
    case EUIActions.UI_NAVTAB_CHANGED:
      return {
        ...currentState,
        currentNavTab: action.payload,
      };
    case EUIActions.INPUT_SEARCH_CHANGED:
      return {
        ...currentState,
        inputSearchValue: action.payload,
      };
    default:
      return currentState;
  }
};

export default viewStyleReducer;
