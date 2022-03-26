import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { useHorizontalScroll } from "../../hooks/useHorizontallScroll";
import { getMovieDetails } from "../../redux/movie/movie-actions";
import {
  addToFavouritesList,
  addToWatchLaterList,
} from "../../redux/save-lists/save-list-actions";
import { TRootStoreType } from "../../redux/store";
import { toggleModalVisibility } from "../../redux/ui/ui-actions";
import { EUITypes } from "../../redux/ui/ui-types";
import IMovie from "../../types/movie";
import MovieThumb from "../movie-collection/MovieThumb.component";

const MovieCollecionContainer = styled.div`
  display: flex;
  flex-direcation: row;
  align-items: center;
  overflow-x: auto;
  flex-wrap: nowrap;

  height: 250px;

  position: relative;
`;

interface IMovieListProps {
  movies: Array<IMovie>;
}

const MovieCollection: React.FunctionComponent<IMovieListProps> = ({
  movies,
}) => {
  const scrollRef = useHorizontalScroll();
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
    event: React.MouseEvent<HTMLDivElement>,
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
      <MovieCollecionContainer ref={scrollRef}>
        {/* {isLoading && <LoadingSpinner asOverlay />} */}
        {movies.map((movie: IMovie) => {
          // check if the movie exist in the fav list for every item
          const favFilled =
            favouriteList.find((item) => item.id === movie.id) !== undefined;
          // check if the movie exist in the wl list for every item
          const watchlaterFilled =
            watchLaterList.find((item) => item.id === movie.id) !== undefined;
          return (
            <MovieThumb
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
      </MovieCollecionContainer>
    </React.Fragment>
  );
};

export default MovieCollection;
