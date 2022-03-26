import { IconButton } from "@mui/material";
import React from "react";
import styled from "styled-components";
import IMovie from "../../types/movie";
import { EListType } from "./MovieCollection.component";
import StarIconFilled from "@mui/icons-material/Star";
import StarIconOutlined from "@mui/icons-material/StarBorderOutlined";
import WatchLaterIconFilled from "@mui/icons-material/WatchLater";
import WatchLaterIconOutlined from "@mui/icons-material/WatchLaterOutlined";
import { makeStyles } from "@mui/styles";

const DetailsBar = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  width: 150px;
  transition: 0.5s ease;
  opacity: 0;
  bottom: 0;
  font-size: 6px;
  padding: 10px;
  text-align: center;

  cursor: auto;
`;
const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 150px;
  max-height: 200px;
  min-width: 150px;
  min-height: 200px;

  margin: 5px 5px;

  border: 1px solid #e4e4eb;
  border-radius: 5px;

  cursor: pointer;

  background-size: cover;
  background-position: center;

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
  &:hover ${DetailsBar} {
    opacity: 1;
  }
`;

const useStyles = makeStyles({
  favAndWatchlaterButtons: {
    padding: "0 5px",
    marginLeft: "auto",
  },
  iconButton: {
    padding: "2px 5px",
    color: "yellow",
  },
});

interface IMovieThumbProps extends IMovie {
  itemType: EListType;
}

const MovieThumb: React.FunctionComponent<IMovieThumbProps> = (movie) => {
  const { release_date, poster_path, vote_average, vote_count } = movie;
  const classes = useStyles();
  return (
    <MovieContainer
      style={{
        backgroundImage: `url("${process.env.REACT_APP_API_POSTER_URL}${poster_path}")`,
      }}
    >
      <DetailsBar>
        <div className={classes.favAndWatchlaterButtons}>
          {(movie.itemType === EListType.LIST_TYPE_WATCHLATER ||
            movie.itemType === EListType.LIST_TYPE_SEARCH) && (
            <IconButton
              className={classes.iconButton}
              // onClick={watchLaterButtonClickHandle}
            >
              {movie.itemType === EListType.LIST_TYPE_WATCHLATER && (
                <WatchLaterIconFilled />
              )}
              {movie.itemType === EListType.LIST_TYPE_SEARCH && (
                <WatchLaterIconOutlined />
              )}
            </IconButton>
          )}
          {(movie.itemType === EListType.LIST_TYPE_FAVOURITES ||
            movie.itemType === EListType.LIST_TYPE_SEARCH) && (
            <IconButton
              className={classes.iconButton}
              // onClick={favouriteButtonClickHandle}
            >
              {movie.itemType === EListType.LIST_TYPE_FAVOURITES && (
                <StarIconFilled />
              )}
              {movie.itemType === EListType.LIST_TYPE_SEARCH && (
                <StarIconOutlined />
              )}
            </IconButton>
          )}
        </div>
      </DetailsBar>
    </MovieContainer>
  );
};
export default MovieThumb;
