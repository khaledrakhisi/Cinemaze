import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner.component";

import MovieList from "../../components/movie-list/MovieList.component";
import SearchArea from "../../components/search-area/SearchArea.component";
import movies from "../../data/mock-data";
import { getMovies } from "../../redux/movie/movie-actions";
import { TRootStoreType } from "../../redux/store";
import { changeNavTab } from "../../redux/ui/ui-actions";
import { EUITypes } from "../../redux/ui/ui-types";
import IMovie from "../../types/movie";

const HomepageStyled = styled.div`
  width: 90vw;
  height: calc(100vh - 120px);

  padding: 10px;
`;

const HomePage: React.FunctionComponent = () => {
  const { movie, UIState } = useSelector((state: TRootStoreType) => state);
  const moviesList: Array<IMovie> = movie.results;

  const dispatch = useDispatch();

  // This use Effect is being used for debouncing sake
  useEffect(() => {
    dispatch(changeNavTab(EUITypes.NAV_TAB_SEARCH));
    if (UIState.inputSearchValue) dispatch(getMovies(UIState.inputSearchValue));
  }, [UIState.inputSearchValue]);

  return (
    <HomepageStyled>
      <SearchArea />

      {movie.isLoading && <LoadingSpinner asOverlay />}
      <MovieList movies={moviesList} />
    </HomepageStyled>
  );
};

export default HomePage;
