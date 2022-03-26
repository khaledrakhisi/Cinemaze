import React from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "@mui/material/List";
import { makeStyles } from "@mui/styles";

import { getMovieDetails } from "../../redux/movie/movie-actions";
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

interface IMovieListProps {
  movies: Array<IMovie>;
}

const MovieList: React.FunctionComponent<IMovieListProps> = ({ movies }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { currentNavTab } = useSelector(
    (state: TRootStoreType) => state.UIState
  );
  const { favouriteList, watchLaterList } = useSelector(
    (state: TRootStoreType) => state.saveList
  );

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
      </List>
    </React.Fragment>
  );
};

export default MovieList;
