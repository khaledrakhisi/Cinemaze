import { IconButton } from "@mui/material";
import React from "react";
import styled from "styled-components";
import IMovie from "../../types/movie";
import StarIconFilled from "@mui/icons-material/Star";
import StarIconOutlined from "@mui/icons-material/StarBorderOutlined";
import WatchLaterIconFilled from "@mui/icons-material/WatchLater";
import WatchLaterIconOutlined from "@mui/icons-material/WatchLaterOutlined";
import { makeStyles } from "@mui/styles";
import { abbreviateNumber } from "../../utils/util";

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
const TextStyled = styled.div`
  color: #fff;
  font-size: 14px;
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
    color: "yellow",
  },
});

interface IMovieThumbProps extends IMovie {
  showFavouritesButton: boolean;
  showWatchlaterButton: boolean;
  favouritesButtonAsFilled: boolean;
  watchLaterButtonAsFilled: boolean;
  onFavouritesButtonClicked: (e: any, movieItem: IMovie) => void;
  onWatchLaterButtonClicked: (e: any, movieItem: IMovie) => void;
}

const MovieThumb: React.FunctionComponent<IMovieThumbProps> = (props) => {
  const {
    release_date,
    poster_path,
    vote_average,
    vote_count,
    showFavouritesButton,
    showWatchlaterButton,
    favouritesButtonAsFilled,
    watchLaterButtonAsFilled,
    onFavouritesButtonClicked,
    onWatchLaterButtonClicked,
  } = props;
  const classes = useStyles();

  return (
    <MovieContainer
      style={{
        backgroundImage: `url("${process.env.REACT_APP_API_POSTER_URL}${poster_path}")`,
      }}
    >
      <DetailsBar>
        <TextStyled>
          {release_date.slice(0, release_date.indexOf("-"))}
        </TextStyled>
        <TextStyled>
          {vote_average} / {abbreviateNumber(vote_count)}
        </TextStyled>
        <div className={classes.favAndWatchlaterButtons}>
          {showWatchlaterButton && (
            <IconButton
              className={classes.iconButton}
              onClick={(e) => onWatchLaterButtonClicked(e, props)}
            >
              {watchLaterButtonAsFilled ? (
                <WatchLaterIconFilled />
              ) : (
                <WatchLaterIconOutlined />
              )}
            </IconButton>
          )}
          {showFavouritesButton && (
            <IconButton
              className={classes.iconButton}
              onClick={(e) => onFavouritesButtonClicked(e, props)}
            >
              {favouritesButtonAsFilled ? (
                <StarIconFilled />
              ) : (
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
