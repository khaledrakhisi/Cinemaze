import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchIconFilled from "@mui/icons-material/Search";
import SearchIconOutlined from "@mui/icons-material/SearchOutlined";
import StarIconFilled from "@mui/icons-material/Star";
import StarIconOutlined from "@mui/icons-material/StarBorderOutlined";
import WatchLaterIconFilled from "@mui/icons-material/WatchLater";
import WatchLaterIconOutlined from "@mui/icons-material/WatchLaterOutlined";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import { TRootStoreType } from "../../redux/store";
import { changeNavTab } from "../../redux/ui/ui-actions";
import { EUITypes } from "../../redux/ui/ui-types";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
});

const NavBottom: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentNavTab } = useSelector(
    (state: TRootStoreType) => state.UIState
  );
  const classes = useStyles();

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
      className={classes.stickToBottom}
    >
      <BottomNavigationAction
        label="Watch later"
        value={EUITypes.NAV_TAB_WATCHLATER}
        icon={
          currentNavTab === EUITypes.NAV_TAB_WATCHLATER ? (
            <WatchLaterIconFilled />
          ) : (
            <WatchLaterIconOutlined />
          )
        }
      />
      <BottomNavigationAction
        label="Search"
        value={EUITypes.NAV_TAB_SEARCH}
        icon={
          currentNavTab === EUITypes.NAV_TAB_SEARCH ? (
            <SearchIconFilled />
          ) : (
            <SearchIconOutlined />
          )
        }
      />

      <BottomNavigationAction
        label="Favorites"
        value={EUITypes.NAV_TAB_FAVORITES}
        icon={
          currentNavTab === EUITypes.NAV_TAB_FAVORITES ? (
            <StarIconFilled />
          ) : (
            <StarIconOutlined />
          )
        }
      />
    </BottomNavigation>
  );
};

export default NavBottom;
