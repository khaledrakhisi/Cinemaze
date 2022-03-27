import React from "react";
import StarIconFilled from "@mui/icons-material/Star";
import StarIconOutlined from "@mui/icons-material/StarBorderOutlined";
import WatchLaterIconFilled from "@mui/icons-material/WatchLater";
import WatchLaterIconOutlined from "@mui/icons-material/WatchLaterOutlined";
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";

import IMovie from "../../types/movie";
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
  icon: {
    color: "yellow",
  },
});

interface IMovieThumbProps extends IMovie {
  showFavouritesButton: boolean;
  showWatchlaterButton: boolean;
  favouritesButtonAsFilled: boolean;
  watchLaterButtonAsFilled: boolean;
  onFavouritesButtonClicked: (
    event: React.MouseEvent<HTMLButtonElement>,
    movieItem: IMovie
  ) => void;
  onWatchLaterButtonClicked: (
    event: React.MouseEvent<HTMLButtonElement>,
    movieItem: IMovie
  ) => void;
  onClickHandle: (
    event: React.MouseEvent<HTMLDivElement>,
    movieId: string
  ) => void;
}

const MovieThumb: React.FunctionComponent<IMovieThumbProps> = (props) => {
  const {
    id,
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
    onClickHandle,
  } = props;
  const classes = useStyles();

  /* Extracting Year from release date*/
  let releasedYear = "";
  try {
    if (release_date.includes("-")) {
      releasedYear = release_date.slice(0, release_date.indexOf("-"));
    }
  } catch {
    // todo
  }

  let posterFullpath = "";
  if (poster_path) {
    posterFullpath = `${process.env.REACT_APP_API_POSTER_URL!}${poster_path}`;
  } else {
    posterFullpath = `${process.env.PUBLIC_URL}cinema.png`;
  }
  return (
    <MovieContainer
      style={{
        backgroundImage: `url("${posterFullpath}")`,
      }}
      onClick={(e) => {
        onClickHandle(e, id);
      }}
    >
      <DetailsBar>
        <TextStyled>{releasedYear}</TextStyled>
        <TextStyled>
          {vote_average} / {abbreviateNumber(vote_count)}
        </TextStyled>
        <div className={classes.favAndWatchlaterButtons}>
          {showWatchlaterButton && (
            <IconButton onClick={(e) => onWatchLaterButtonClicked(e, props)}>
              {watchLaterButtonAsFilled ? (
                <WatchLaterIconFilled className={classes.icon} />
              ) : (
                <WatchLaterIconOutlined className={classes.icon} />
              )}
            </IconButton>
          )}
          {showFavouritesButton && (
            <IconButton onClick={(e) => onFavouritesButtonClicked(e, props)}>
              {favouritesButtonAsFilled ? (
                <StarIconFilled className={classes.icon} />
              ) : (
                <StarIconOutlined className={classes.icon} />
              )}
            </IconButton>
          )}
        </div>
      </DetailsBar>
    </MovieContainer>
  );
};
export default MovieThumb;
