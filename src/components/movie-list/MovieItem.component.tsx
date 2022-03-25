import React, { useEffect } from "react";

import { makeStyles } from "@mui/styles";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import StarIconOutlined from "@mui/icons-material/StarBorderOutlined";
import StarIconFilled from "@mui/icons-material/Star";
import WatchLaterIcon from "@mui/icons-material/WatchLaterOutlined";
import IconButton from "@mui/material/IconButton";

import IMovie from "../../types/movie";
import { abbreviateNumber } from "../../utils/util";
import { useDispatch } from "react-redux";
import { toggleFavourite } from "../../redux/movie/movie-actions";

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

interface IMovieItemProps extends IMovie {
  // onFavouriteButtonClicked: () => void;
}

const MovieItem: React.FunctionComponent<IMovieItemProps> = ({
  id,
  poster_path,
  title,
  vote_average,
  vote_count,
  release_date,
  overview,
  favourite,
  // onFavouriteButtonClicked,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const favouriteButtonClickHandle = () => {
    favourite = !favourite;
    console.log("FAV CLIIIICKED", id);
    dispatch(toggleFavourite(id));
  };

  useEffect(() => {}, [favourite]);

  return (
    <ListItem alignItems="flex-start" className={classes.list}>
      <ListItemAvatar>
        <Box
          className={classes.poster}
          component="img"
          alt="none"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        />
      </ListItemAvatar>
      <ListItemText
        primary={<div className={classes.title}>{title}</div>}
        primaryTypographyProps={{ component: "div" }}
        secondaryTypographyProps={{ component: "div" }}
        secondary={
          <React.Fragment>
            <div className={classes.vote}>
              <span>{`${vote_average} / ${abbreviateNumber(vote_count)}`}</span>
              <div className={classes.favAndWatchlaterButtons}>
                <IconButton className={classes.iconButton}>
                  <WatchLaterIcon />
                </IconButton>
                <IconButton
                  className={classes.iconButton}
                  onClick={favouriteButtonClickHandle}
                >
                  {favourite && <StarIconFilled />}
                  {!favourite && <StarIconOutlined />}
                </IconButton>
              </div>
            </div>
            <Typography className={classes.releaseDate}>
              <span>{release_date}</span>
            </Typography>

            <Typography className={classes.overview}>{overview}</Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default MovieItem;
