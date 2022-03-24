import React, { useState } from "react";
import styled from "styled-components";

import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModuleOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { device } from "../../utils/util";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { TRootStoreType } from "../../redux/store";
import { EUITypes } from "../../redux/ui/ui-types";
import { changeViewStyle } from "../../redux/ui/ui-actions";

const ToggleButtonThumb = styled(ToggleButton)`
  background-color: red;
  @media (min-width: ${device.tablet}) {
    display: none;
  }
`;

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
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: EUITypes
  ) => {
    if (nextView != null) dispatch(changeViewStyle(nextView));
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

      <ToggleButtonThumb
        value={EUITypes.VIEW_STYLE_THUMBNAIL}
        aria-label="thumb"
      >
        <GridViewIcon />
      </ToggleButtonThumb>
    </ToggleButtonGroup>
  );
};

export default ViewToggleButtons;
