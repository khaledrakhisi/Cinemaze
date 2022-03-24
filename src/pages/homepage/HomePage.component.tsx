import React from "react";
import styled from "styled-components";

import MovieList from "../../components/movie-list/MovieList.component";
import SearchArea from "../../components/search-area/SearchArea.component";
import movies from "../../data/mock-data";

const HomepageStyled = styled.div`
  width: 90vw;
  height: calc(100vh - 120px);

  padding: 10px;
`;

const HomePage: React.FunctionComponent = () => {
  return (
    <HomepageStyled>
      <SearchArea />
      <MovieList movies={movies} />
    </HomepageStyled>
  );
};

export default HomePage;
