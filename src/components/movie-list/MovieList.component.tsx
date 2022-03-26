import React from "react";
import List from "@mui/material/List";
import { makeStyles } from "@mui/styles";

import IMovie from "../../types/movie";

import MovieItem from "./MovieItem.component";

const useStyles = makeStyles({
  list: {
    width: "100%",
    bgcolor: "background.paper",
    maxHeight: "85%",
    minHeight: "100px",
    overflow: "auto",
    padding: "5px",
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
        "The list is empty, type something in the search textbox. you can use voice command too!"}
      <List className={classes.list}>
        {movies.map((movie) => (
          <MovieItem {...movie} itemType={listType} />
        ))}
      </List>
    </React.Fragment>
  );
};

export default MovieList;
