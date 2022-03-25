import React from "react";

import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import MovieItem from "./MovieItem.component";
import IMovie from "../../types/movie";

const useStyles = makeStyles({
  list: {
    width: "100%",
    bgcolor: "background.paper",
    maxHeight: "85%",
    minHeight: "100px",
    overflow: "auto",
  },
  divider: {
    margin: "auto",
    width: "90%",
  },
});

export enum EListType {
  LIST_TYPE_FAVOURITES = "LIST_TYPE_FAVOURITES",
  LIST_TYPE_SEARCH = "LIST_TYPE_SEARCH",
  LIST_TYPE_WATCHLATER = "LIST_TYPE_WATCHLATER",
}

interface IMovieListProps {
  movies: Array<IMovie>;
  listType: EListType;
}

const MovieList: React.FunctionComponent<IMovieListProps> = ({
  movies,
  listType,
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {movies &&
        movies.length === 0 &&
        "The list is empty, type some name in the search textbox. you can use voice command too!"}
      <List className={classes.list}>
        {movies.map((movie) => (
          <React.Fragment key={movie.id}>
            <MovieItem {...movie} itemType={listType} />
            <Divider
              className={classes.divider}
              variant="inset"
              component="li"
            />
          </React.Fragment>
        ))}
      </List>
    </React.Fragment>
  );
};

export default MovieList;
