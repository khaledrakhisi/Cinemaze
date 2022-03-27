import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";

import MovieList from "../../components/movie-list/MovieList.component";
import { TRootStoreType } from "../../redux/store";

const FavpageStyled = styled.div`
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
  const { saveList } = useSelector((state: TRootStoreType) => state);
  const classes = useStyles();

  return (
    <FavpageStyled>
      <Typography className={classes.pageTitle}>Favorites</Typography>
      <MovieList movies={saveList.favouriteList} />
    </FavpageStyled>
  );
};

export default FavPage;
