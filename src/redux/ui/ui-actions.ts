import {
  EUIActions,
  EUITypes,
  TUIDispatchAction,
  TUIInputDispatchAction,
  TUIModalDispatchAction,
} from "./ui-types";

export const changeViewStyle = (
  new_view_style: EUITypes
): TUIDispatchAction => {
  return {
    type: EUIActions.UI_VIEWSTYLE_CHANGED,
    payload: new_view_style,
  };
};

export const changeNavTab = (new_tab_name: EUITypes): TUIDispatchAction => {
  return {
    type: EUIActions.UI_NAVTAB_CHANGED,
    payload: new_tab_name,
  };
};

export const changeInputSearchValue = (
  new_value: string
): TUIInputDispatchAction => {
  return {
    type: EUIActions.UI_INPUT_SEARCH_CHANGED,
    payload: new_value,
  };
};

export const toggleModalVisibility = (): TUIModalDispatchAction => {
  return {
    type: EUIActions.UI_MODAL_TOGGLE_VISIBILITY,
  };
};
