import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Divider from "@mui/material/Divider";

import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner.component";
import MovieCollection from "../../components/movie-collection/MovieCollection.component";
import MovieList, {
  EListType,
} from "../../components/movie-list/MovieList.component";
import SearchArea from "../../components/search-area/SearchArea.component";
import { getMovies } from "../../redux/movie/movie-actions";
import { TRootStoreType } from "../../redux/store";
import { EUITypes } from "../../redux/ui/ui-types";

const HomepageStyled = styled.div`
  height: calc(100vh - 120px);

  padding: 10px;
`;

const HomePage: React.FunctionComponent = () => {
  const { results, isLoading } = useSelector(
    (state: TRootStoreType) => state.movie
  );
  const { currentViewStyle, inputSearchValue } = useSelector(
    (state: TRootStoreType) => state.UIState
  );
  const { favouriteList, watchLaterList } = useSelector(
    (state: TRootStoreType) => state.saveList
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (inputSearchValue) {
      dispatch(getMovies(inputSearchValue));
    }
  }, [inputSearchValue, dispatch]);

  return (
    <HomepageStyled>
      <SearchArea />

      {isLoading && <LoadingSpinner asOverlay />}
      {currentViewStyle === EUITypes.VIEW_STYLE_LISTVIEW ? (
        <MovieList movies={results} listType={EListType.LIST_TYPE_SEARCH} />
      ) : (
        <React.Fragment>
          <MovieCollection
            movies={results}
            listType={EListType.LIST_TYPE_SEARCH}
          />
          {"Favourites"}
          <Divider />
          <MovieCollection
            movies={favouriteList}
            listType={EListType.LIST_TYPE_SEARCH}
          />
          {"Watch later"}
          <Divider />
          <MovieCollection
            movies={watchLaterList}
            listType={EListType.LIST_TYPE_SEARCH}
          />
        </React.Fragment>
      )}
    </HomepageStyled>
  );
};

export default HomePage;
