import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import useDebounce from "../../hooks/useDebounce";
import { changeInputSearchValue } from "../../redux/ui/ui-actions";
import InputSearch from "../input-search/InputSearch.component";
import ViewToggleButtons from "../view-toggle-button/ViewToggleButton.component";

const SearchAreaStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

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

  const dispatch = useDispatch();

  // A custom hook for debouncing
  const debouncedValue = useDebounce<string>(value, 500);

  const inputSearchChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.currentTarget;

    setValue(value);
  };

  // This use Effect is being used for debouncing sake
  useEffect(() => {
    dispatch(changeInputSearchValue(value));
  }, [debouncedValue]);

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
