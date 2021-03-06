import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { makeStyles } from "@mui/styles";

import { TRootStoreType } from "../../redux/store";
import { changeViewStyle } from "../../redux/ui/ui-actions";
import { EUITypes } from "../../redux/ui/ui-types";

const useStyles = makeStyles({
  toggleButtonGroup: {
    marginLeft: "auto",
    padding: "0",
  },
});

const ViewToggleButtons: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { currentViewStyle } = useSelector(
    (state: TRootStoreType) => state.UIState
  );
  const classes = useStyles();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: EUITypes
  ) => {
    if (nextView != null) {
      dispatch(changeViewStyle(nextView));
    }
  };

  return (
    <ToggleButtonGroup
      orientation="horizontal"
      value={currentViewStyle}
      exclusive
      onChange={handleChange}
      data-testid="view-toggle-buttons"
      className={classes.toggleButtonGroup}
    >
      {/* <ToggleButton value={EUITypes.VIEW_STYLE_TABLEVIEW} aria-label="table">
        <ViewModuleIcon />
      </ToggleButton> */}

      <ToggleButton value={EUITypes.VIEW_STYLE_LISTVIEW} aria-label="list">
        <ViewListIcon />
      </ToggleButton>

      <ToggleButton value={EUITypes.VIEW_STYLE_THUMBNAIL} aria-label="thumb">
        <GridViewIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ViewToggleButtons;
