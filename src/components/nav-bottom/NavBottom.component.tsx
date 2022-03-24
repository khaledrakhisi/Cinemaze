import React, { useState } from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import WatchLaterIcon from "@mui/icons-material/WatchLaterOutlined";

const NavBottom: React.FunctionComponent = () => {
  const [value, setValue] = useState("search");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log("PAGE CHANGED.", newValue);

    if (newValue != null) setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} data-testid="nav">
      <BottomNavigationAction
        label="Favorites"
        value="Favorites"
        icon={<StarIcon />}
      />
      <BottomNavigationAction
        label="Search"
        value="Search"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        label="Watch later"
        value="Watch later"
        icon={<WatchLaterIcon />}
      />
    </BottomNavigation>
  );
};

export default NavBottom;
