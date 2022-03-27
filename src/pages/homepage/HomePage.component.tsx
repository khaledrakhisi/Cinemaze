import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";

import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner.component";
import MovieCollection from "../../components/movie-collection/MovieCollection.component";
import MovieList from "../../components/movie-list/MovieList.component";
import SearchArea from "../../components/search-area/SearchArea.component";
import { getMovies } from "../../redux/movie/movie-actions";
import { TRootStoreType } from "../../redux/store";
import { EUITypes } from "../../redux/ui/ui-types";

const HomepageStyled = styled.div`
  height: calc(100vh - 120px);

  padding: 10px;
`;
const SectionSearchStyled = styled.div`
  position: relative;
`;
const SectionListStyled = styled.div`
  position: relative;
  height: 100%;
`;

const useStyles = makeStyles({
  sectionTitle: {
    color: "#2E3B55",
    fontWeight: "bold",
    fontSize: "20px",
  },
  poweredby: {
    color: "#2E3B55",
    margin: "20px",
    textAlign: "center",
  },
});

const HomePage: React.FunctionComponent = () => {
  const { results, isLoading, total_results } = useSelector(
    (state: TRootStoreType) => state.movie
  );
  const { currentViewStyle, inputSearchValue } = useSelector(
    (state: TRootStoreType) => state.UIState
  );
  const { favouriteList, watchLaterList } = useSelector(
    (state: TRootStoreType) => state.saveList
  );

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (inputSearchValue) {
      dispatch(getMovies(inputSearchValue));
    }
  }, [inputSearchValue, dispatch]);

  return (
    <HomepageStyled>
      <SearchArea />
      {total_results > 1 && `${total_results} results`}
      {currentViewStyle === EUITypes.VIEW_STYLE_LISTVIEW ? (
        <SectionListStyled>
          {isLoading && <LoadingSpinner asOverlay />}
          <MovieList movies={results} />
        </SectionListStyled>
      ) : (
        <React.Fragment>
          <SectionSearchStyled>
            {isLoading && <LoadingSpinner asOverlay />}
            <MovieCollection movies={results} isInfiniteScroll={true} />
          </SectionSearchStyled>
          <Typography className={classes.sectionTitle}>
            &#10097; Favorites
          </Typography>
          <Divider />
          <MovieCollection movies={favouriteList} isInfiniteScroll={false} />
          <Typography className={classes.sectionTitle}>
            &#10097; Watch later
          </Typography>
          <Divider />
          <MovieCollection movies={watchLaterList} isInfiniteScroll={false} />
        </React.Fragment>
      )}
      {currentViewStyle === EUITypes.VIEW_STYLE_THUMBNAIL && (
        <Typography className={classes.poweredby}>
          Powered by The Movie Database (TMDB) themoviedb.org
        </Typography>
      )}
    </HomepageStyled>
  );
};

export default HomePage;
