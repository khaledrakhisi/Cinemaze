import React from "react";
import styled from "styled-components";

import MovieList from "../../components/movie-list/MovieList.component";
import SearchArea from "../../components/search-area/SearchArea.component";
import movies from "../../data/mock-data";

const HomepageStyled = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);

  padding: 0;
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
