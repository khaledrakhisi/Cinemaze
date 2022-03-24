import React, { useState } from "react";
import styled from "styled-components";

import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModuleOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { device } from "../../utils/util";
import { makeStyles } from "@mui/styles";

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
  const [value, setValue] = useState("list");

  const classes = useStyles();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string
  ) => {
    if (nextView != null) setValue(nextView);
  };

  return (
    <ToggleButtonGroup
      orientation="horizontal"
      value={value}
      exclusive
      onChange={handleChange}
      data-testid="view-toggle-buttons"
      className={classes.toggleButtonGroup}
    >
      <ToggleButton value="table" aria-label="table">
        <ViewModuleIcon />
      </ToggleButton>

      <ToggleButton value="list" aria-label="list">
        <ViewListIcon />
      </ToggleButton>

      <ToggleButtonThumb value="thumb" aria-label="thumb">
        <GridViewIcon />
      </ToggleButtonThumb>
    </ToggleButtonGroup>
  );
};

export default ViewToggleButtons;
