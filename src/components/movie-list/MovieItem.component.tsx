import React from "react";
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

import IMovie from "../../types/movie";
import { abbreviateNumber } from "../../utils/util";

const useStyles = makeStyles({
  container: {
    padding: "0",
    boxShadow: "3px 3px 3px 0 #aaa",
    marginBottom: "5px",
    borderRadius: "5px",
    border: "1px solid #e4e4eb",
    cursor: "pointer",
  },
  title: {
    color: "#2E3B55",
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
    color: "#41802e",
    fontSize: ".8rem",
    fontWeight: "bold",
  },
  overview: {
    color: "#000",
    maxHeight: "75px",
    fontSize: ".8rem",
    // textAlign: "justify",
    lineHeight: "1.3",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: "4",
    // wordBreak: "break-all",
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
  icon: {
    color: "#2E3B55",
  },
});

interface IMovieItemProps extends IMovie {
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
    event: React.MouseEvent<HTMLLIElement>,
    movieId: string
  ) => void;
}

const MovieItem: React.FunctionComponent<IMovieItemProps> = (props) => {
  const {
    id,
    title,
    overview,
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
  if (release_date.includes("-")) {
    releasedYear = release_date.slice(0, release_date.indexOf("-"));
  }

  return (
    <ListItem
      alignItems="flex-start"
      className={classes.container}
      onClick={(e) => {
        onClickHandle(e, id);
      }}
    >
      <ListItemAvatar>
        <Box
          className={classes.poster}
          component="img"
          alt="none"
          src={`${process.env.REACT_APP_API_POSTER_URL}${poster_path}`}
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
                {showWatchlaterButton && (
                  <IconButton
                    className={classes.iconButton}
                    onClick={(e) => onWatchLaterButtonClicked(e, props)}
                  >
                    {watchLaterButtonAsFilled ? (
                      <WatchLaterIconFilled className={classes.icon} />
                    ) : (
                      <WatchLaterIconOutlined className={classes.icon} />
                    )}
                  </IconButton>
                )}
                {showFavouritesButton && (
                  <IconButton
                    className={classes.iconButton}
                    onClick={(e) => onFavouritesButtonClicked(e, props)}
                  >
                    {favouritesButtonAsFilled ? (
                      <StarIconFilled className={classes.icon} />
                    ) : (
                      <StarIconOutlined className={classes.icon} />
                    )}
                  </IconButton>
                )}
              </div>
            </div>
            <Typography className={classes.releaseDate}>
              <span>{releasedYear}</span>
            </Typography>

            <Typography className={classes.overview}>{overview}</Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default MovieItem;
