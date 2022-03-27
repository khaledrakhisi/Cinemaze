import React from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useDispatch, useSelector } from "react-redux";
import List from "@mui/material/List";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";

import { getMovieDetails, getMovies } from "../../redux/movie/movie-actions";
import {
  addToFavouritesList,
  addToWatchLaterList,
} from "../../redux/save-lists/save-list-actions";
import { TRootStoreType } from "../../redux/store";
import { toggleModalVisibility } from "../../redux/ui/ui-actions";
import { EUITypes } from "../../redux/ui/ui-types";
import IMovie from "../../types/movie";

import MovieItem from "./MovieItem.component";

const useStyles = makeStyles({
  list: {
    width: "100%",
    bgcolor: "background.paper",
    // maxHeight: "85%",
    minHeight: "100px",
    overflow: "auto",
    padding: "5px",
  },
  divider: {
    margin: "auto",
    width: "90%",
  },
});

const LoadingStyled = styled.div`
  margin: 10px 0 60px;
  text-align: center;
  color: blue;
`;

interface IMovieListProps {
  movies: Array<IMovie>;
}

const MovieList: React.FunctionComponent<IMovieListProps> = ({ movies }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isLoading, page, total_pages, error } = useSelector(
    (state: TRootStoreType) => state.movie
  );
  const { currentNavTab, inputSearchValue } = useSelector(
    (state: TRootStoreType) => state.UIState
  );
  const { favouriteList, watchLaterList } = useSelector(
    (state: TRootStoreType) => state.saveList
  );

  const loadMoreHandle = () => {
    if (inputSearchValue) {
      dispatch(getMovies(inputSearchValue, (Number(page) + 1).toString()));
    }
  };
  const hasNextPage: boolean = page < total_pages;
  const [sentryRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage: hasNextPage,
    onLoadMore: loadMoreHandle,
    // When there is an error, we stop infinite loading.
    // It can be reactivated by setting "error" state as undefined.
    disabled: Boolean(error),
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    rootMargin: "0px 0px 400px 0px",
  });

  const favouriteButtonClickHandle = (
    event: React.MouseEvent<HTMLButtonElement>,
    movieItem: IMovie
  ) => {
    event.stopPropagation();
    dispatch(addToFavouritesList(movieItem));
  };
  const watchLaterButtonClickHandle = (
    event: React.MouseEvent<HTMLButtonElement>,
    movieItem: IMovie
  ) => {
    event.stopPropagation();
    dispatch(addToWatchLaterList(movieItem));
  };
  const itemClickedHandle = (
    event: React.MouseEvent<HTMLLIElement>,
    movieId: string
  ) => {
    // First, fetch the selected movie details from the API
    dispatch(getMovieDetails(movieId));

    // second show movie details or error
    dispatch(toggleModalVisibility());
  };

  /*
    In this section we will decide to show the fav and wl buttons in respective pages
  */
  const showFavButton =
    currentNavTab === EUITypes.NAV_TAB_FAVORITES ||
    currentNavTab === EUITypes.NAV_TAB_SEARCH;

  const showWatchLaterButton =
    currentNavTab === EUITypes.NAV_TAB_WATCHLATER ||
    currentNavTab === EUITypes.NAV_TAB_SEARCH;

  return (
    <React.Fragment>
      {movies &&
        movies.length === 0 &&
        "The list is empty, type something in the search textbox. you can use voice command too!"}
      <List className={classes.list}>
        {movies.map((movie) => {
          // check if the movie exist in the fav list for every item
          const favFilled =
            favouriteList.find((item) => item.id === movie.id) !== undefined;
          // check if the movie exist in the wl list for every item
          const watchlaterFilled =
            watchLaterList.find((item) => item.id === movie.id) !== undefined;
          return (
            <MovieItem
              key={movie.id}
              {...movie}
              showFavouritesButton={showFavButton}
              showWatchlaterButton={showWatchLaterButton}
              favouritesButtonAsFilled={favFilled}
              watchLaterButtonAsFilled={watchlaterFilled}
              onFavouritesButtonClicked={favouriteButtonClickHandle}
              onWatchLaterButtonClicked={watchLaterButtonClickHandle}
              onClickHandle={itemClickedHandle}
            />
          );
        })}
        {(isLoading || hasNextPage) &&
          currentNavTab === EUITypes.NAV_TAB_SEARCH && (
            <LoadingStyled key="{@@}" ref={sentryRef}>
              Loading...
            </LoadingStyled>
          )}
      </List>
    </React.Fragment>
  );
};

export default MovieList;
