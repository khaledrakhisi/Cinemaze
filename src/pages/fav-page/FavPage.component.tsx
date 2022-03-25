import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { makeStyles } from "@mui/styles";

import MovieList from "../../components/movie-list/MovieList.component";
import movies from "../../data/mock-data";

const FavpageStyled = styled.div`
  width: 90vw;
  height: calc(100vh - 120px);

  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const useStyles = makeStyles({
  pageTitle: {
    color: "#000",
    fontWeight: "bold",
    fontSize: "20px",
  },
});

const FavPage: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <FavpageStyled>
      <Typography className={classes.pageTitle}>Favourites</Typography>
      <MovieList movies={movies} />
    </FavpageStyled>
  );
};

export default FavPage;
