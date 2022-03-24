import React, { useState } from "react";
import styled from "styled-components";

import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModuleOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ToggleButtonThumb = styled(ToggleButton)`
  @media (min-width: 768px) {
    display: none;
  }
`;

const ViewToggleButtons: React.FunctionComponent = () => {
  const [value, setValue] = useState("list");

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
