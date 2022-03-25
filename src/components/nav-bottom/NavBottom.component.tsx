import React from "react";
import { useNavigate } from "react-router-dom";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import WatchLaterIcon from "@mui/icons-material/WatchLaterOutlined";
import { useDispatch, useSelector } from "react-redux";
import { TRootStoreType } from "../../redux/store";
import { EUITypes } from "../../redux/ui/ui-types";
import { changeNavTab } from "../../redux/ui/ui-actions";

const NavBottom: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentNavTab } = useSelector(
    (state: TRootStoreType) => state.UIState
  );

  const handleChange = (event: React.SyntheticEvent, newValue: EUITypes) => {
    if (newValue != null) {
      dispatch(changeNavTab(newValue));
      navigate(newValue);
    }
  };

  return (
    <BottomNavigation
      value={currentNavTab}
      onChange={handleChange}
      data-testid="nav"
    >
      <BottomNavigationAction
        label="Favorites"
        value={EUITypes.NAV_TAB_FAVORITES}
        icon={<StarIcon />}
      />
      <BottomNavigationAction
        label="Search"
        value={EUITypes.NAV_TAB_SEARCH}
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        label="Watch later"
        value={EUITypes.NAV_TAB_WATCHLATER}
        icon={<WatchLaterIcon />}
      />
    </BottomNavigation>
  );
};

export default NavBottom;
