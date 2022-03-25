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
    maxHeight: "65vh",
    minHeight: "50vh",
    overflow: "auto",
  },
  divider: {
    margin: "auto",
    width: "90%",
  },
});

interface IMovieListProps {
  movies: Array<IMovie>;
}

const MovieList: React.FunctionComponent<IMovieListProps> = ({ movies }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {movies &&
        movies.length === 0 &&
        "The list is empty, type some name in the search textbox. you can use voice command too!"}
      <List className={classes.list}>
        {movies.map((movie) => (
          <React.Fragment key={movie.id}>
            <MovieItem {...movie} />
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
