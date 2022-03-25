import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModuleOutlined";
import { useMediaQuery } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { makeStyles } from "@mui/styles";

import { TRootStoreType } from "../../redux/store";
import { changeViewStyle } from "../../redux/ui/ui-actions";
import { EUITypes } from "../../redux/ui/ui-types";
import { device } from "../../utils/util";

const useStyles = makeStyles({
  toggleButtonGroup: {
    marginRight: "0",
    padding: "0",
  },
});

const ViewToggleButtons: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { currentViewStyle } = useSelector(
    (state: TRootStoreType) => state.UIState
  );
  const classes = useStyles();
  const isGreaterThanTablet = useMediaQuery(device.tablet);

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
      <ToggleButton value={EUITypes.VIEW_STYLE_TABLEVIEW} aria-label="table">
        <ViewModuleIcon />
      </ToggleButton>

      <ToggleButton value={EUITypes.VIEW_STYLE_LISTVIEW} aria-label="list">
        <ViewListIcon />
      </ToggleButton>

      {isGreaterThanTablet && (
        <ToggleButton value={EUITypes.VIEW_STYLE_THUMBNAIL} aria-label="thumb">
          <GridViewIcon />
        </ToggleButton>
      )}
    </ToggleButtonGroup>
  );
};

export default ViewToggleButtons;
