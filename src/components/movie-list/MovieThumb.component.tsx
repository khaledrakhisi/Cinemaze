import React from "react";
import { useDispatch } from "react-redux";
import StarIconFilled from "@mui/icons-material/Star";
import StarIconOutlined from "@mui/icons-material/StarBorderOutlined";
import WatchLaterIconFilled from "@mui/icons-material/WatchLater";
import WatchLaterIconOutlined from "@mui/icons-material/WatchLaterOutlined";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

import {
  addToFavouritesList,
  addToWatchLaterList,
} from "../../redux/save-lists/save-list-actions";
import IMovie from "../../types/movie";
import { abbreviateNumber } from "../../utils/util";

import { EListType } from "./MovieList.component";

const useStyles = makeStyles({
  list: {
    padding: "0",
  },
  title: {
    color: "blue",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontWeight: "bold",
  },
  poster: {
    width: "100px",
    height: "145px",
    minWidth: "100px",
    minHeight: "145px",
    margin: "0 5px",
  },
  releaseDate: {
    color: "green",
    fontSize: ".8rem",
    fontWeight: "bold",
  },
  overview: {
    color: "#000",
    maxHeight: "75px",
    fontSize: ".8rem",

    lineHeight: "1.3",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: "4",
  },
  primaryTypographyProps: {
    color: "blue",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontWeight: "bold",
  },
  vote: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    width: "100%",
    color: "#eb9b34",
    fontSize: ".8rem",
    fontWeight: "bold",
  },

  favAndWatchlaterButtons: {
    padding: "0 5px",
    marginLeft: "auto",
  },
  iconButton: {
    padding: "2px 5px",
  },
});

interface IMovieItemProps extends IMovie {
  itemType: EListType;
}

const MovieThumb: React.FunctionComponent<IMovieItemProps> = (movie) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const favouriteButtonClickHandle = () => {
    dispatch(addToFavouritesList(movie));
  };
  const watchLaterButtonClickHandle = () => {
    dispatch(addToWatchLaterList(movie));
  };

  return (
    <ListItem alignItems="flex-start" className={classes.list}>
      <Box
        className={classes.poster}
        component="img"
        alt="none"
        src={`${process.env.REACT_APP_API_POSTER_URL}${movie.poster_path}`}
      />
      {/* <ListItemText
        primary={<div className={classes.title}>{movie.title}</div>}
        primaryTypographyProps={{ component: "div" }}
        secondaryTypographyProps={{ component: "div" }}
        secondary={
          <React.Fragment>
            <div className={classes.vote}>
              <span>{`${movie.vote_average} / ${abbreviateNumber(
                movie.vote_count
              )}`}</span>
              <div className={classes.favAndWatchlaterButtons}>
                {(movie.itemType === EListType.LIST_TYPE_WATCHLATER ||
                  movie.itemType === EListType.LIST_TYPE_SEARCH) && (
                  <IconButton
                    className={classes.iconButton}
                    onClick={watchLaterButtonClickHandle}
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
                    onClick={favouriteButtonClickHandle}
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
            </div>
            <Typography className={classes.releaseDate}>
              <span>{movie.release_date}</span>
            </Typography>

            <Typography className={classes.overview}>
              {movie.overview}
            </Typography>
          </React.Fragment>
        }
      /> */}
    </ListItem>
  );
};

export default MovieThumb;
