export enum EUITypes {
  VIEW_STYLE_LISTVIEW = "VIEW_STYLE_LISTVIEW",
  VIEW_STYLE_TABLEVIEW = "VIEW_STYLE_TABLEVIEW",
  VIEW_STYLE_THUMBNAIL = "VIEW_STYLE_THUMBNAIL",
  NAV_TAB_SEARCH = "search",
  NAV_TAB_FAVORITES = "favourites",
  NAV_TAB_WATCHLATER = "watchlater",
}

export enum EUIActions {
  UI_VIEWSTYLE_CHANGED = "UI_VIEWSTYLE_CHANGED",
  UI_NAVTAB_CHANGED = "UI_NAVTAB_CHANGED",
  UI_INPUT_SEARCH_CHANGED = "UI_INPUT_SEARCH_CHANGED",
  UI_MODAL_TOGGLE_VISIBILITY = "UI_MODAL_TOGGLE_VISIBILITY",
}

export interface IUIState {
  currentViewStyle: EUITypes;
  currentNavTab: EUITypes;
  inputSearchValue: string;
  modalVisibility: boolean;
}

export type TUIDispatchAction = {
  type: EUIActions;
  payload: EUITypes;
};

export type TUIInputDispatchAction = {
  type: EUIActions;
  payload: string;
};

export type TUIModalDispatchAction = {
  type: EUIActions;
};
