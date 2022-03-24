export enum EUITypes {
  VIEW_STYLE_LISTVIEW = "VIEW_STYLE_LISTVIEW",
  VIEW_STYLE_TABLEVIEW = "VIEW_STYLE_TABLEVIEW",
  VIEW_STYLE_THUMBNAIL = "VIEW_STYLE_THUMBNAIL",
  NAV_TAB_SEARCH = "NAV_TAB_SEARCH",
  NAV_TAB_FAVORITES = "NAV_TAB_FAVORITES",
  NAV_TAB_WATCHLATER = "NAV_TAB_WATCHLATER",
}

export enum EUIActions {
  UI_VIEWSTYLE_CHANGED = "UI_VIEWSTYLE_CHANGED",
  UI_NAVTAB_CHANGED = "UI_NAVTAB_CHANGED",
  INPUT_SEARCH_CHANGED = "INPUT_SEARCH_CHANGED",
}

export interface IUIState {
  currentViewStyle: EUITypes;
  currentNavTab: EUITypes;
  inputSearchValue: string;
}

export type TUIDispatchAction = {
  type: EUIActions;
  payload: EUITypes;
};

export type TUIInputDispatchAction = {
  type: EUIActions;
  payload: string;
};
