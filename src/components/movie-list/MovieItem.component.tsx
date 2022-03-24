import React from "react";

import { makeStyles } from "@mui/styles";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/StarBorderOutlined";
import WatchLaterIcon from "@mui/icons-material/WatchLaterOutlined";
import IconButton from "@mui/material/IconButton";

import IMovie from "../../types/movie";

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
    textAlign: "justify",
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

interface IMovieItemProps extends IMovie {}

const MovieItem: React.FunctionComponent<IMovieItemProps> = (movie) => {
  const classes = useStyles();
  return (
    <ListItem alignItems="flex-start" className={classes.list}>
      <ListItemAvatar>
        <Box
          className={classes.poster}
          component="img"
          alt="none"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      </ListItemAvatar>
      <ListItemText
        primary={<div className={classes.title}>{movie.title}</div>}
        primaryTypographyProps={{ component: "div" }}
        secondaryTypographyProps={{ component: "div" }}
        secondary={
          <React.Fragment>
            <div className={classes.vote}>
              <span>{`${movie.vote_average} / ${movie.vote_count}`}</span>
              <div className={classes.favAndWatchlaterButtons}>
                <IconButton className={classes.iconButton}>
                  <WatchLaterIcon />
                </IconButton>
                <IconButton className={classes.iconButton}>
                  <StarIcon />
                </IconButton>
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
      />
    </ListItem>
  );
};

export default MovieItem;
