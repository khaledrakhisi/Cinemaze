import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner.component";
import MovieList, {
  EListType,
} from "../../components/movie-list/MovieList.component";
import SearchArea from "../../components/search-area/SearchArea.component";
import { getMovies } from "../../redux/movie/movie-actions";
import { TRootStoreType } from "../../redux/store";
import IMovie from "../../types/movie";

const HomepageStyled = styled.div`
  height: calc(100vh - 120px);

  padding: 10px;
`;

const HomepageDesktop: React.FunctionComponent = () => {
  const { movie, UIState } = useSelector((state: TRootStoreType) => state);
  const moviesList: Array<IMovie> = movie.results;

  const dispatch = useDispatch();

  useEffect(() => {
    if (UIState.inputSearchValue) {
      dispatch(getMovies(UIState.inputSearchValue));
    }
  }, [UIState.inputSearchValue, dispatch]);

  return (
    <HomepageStyled>
      <SearchArea />

      {movie.isLoading && <LoadingSpinner asOverlay />}
      <MovieList movies={moviesList} listType={EListType.LIST_TYPE_SEARCH} />
    </HomepageStyled>
  );
};

export default HomepageDesktop;
