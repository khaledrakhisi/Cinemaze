import React, { useState } from "react";
import InputSearch from "../input-search/InputSearch.component";

const SearchArea: React.FunctionComponent = () => {
  const [value, setValue] = useState("");

  const inputSearchChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.currentTarget;

    setValue(value);
  };

  return (
    <div className="search-area">
      <div className="input-search">
        <InputSearch
          id="input-movie"
          name="inputMovie"
          label="Movie name"
          onChange={inputSearchChangeHandler}
          type="text"
          value={value}
        />
      </div>
    </div>
  );
};

export default SearchArea;
