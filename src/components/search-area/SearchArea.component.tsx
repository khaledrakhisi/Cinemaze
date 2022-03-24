import React, { useState } from "react";
import styled from "styled-components";

import InputSearch from "../input-search/InputSearch.component";
import ViewToggleButtons from "../view-toggle-button/ViewToggleButton.component";

const SearchAreaStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 90%;

  margin: 10px 0;
`;

const InputSearchStyled = styled(InputSearch)`
  margin: 0 0;
`;

const ViewToggleButtonsStyled = styled(ViewToggleButtons)`
  margin: 0 0;
`;

const SearchArea: React.FunctionComponent = () => {
  const [value, setValue] = useState("");

  const inputSearchChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.currentTarget;

    setValue(value);
  };

  return (
    <SearchAreaStyled>
      <InputSearchStyled
        id="input-movie"
        name="inputMovie"
        label="Movie name"
        onChange={inputSearchChangeHandler}
        type="text"
        value={value}
      />
      <ViewToggleButtonsStyled />
    </SearchAreaStyled>
  );
};

export default SearchArea;
