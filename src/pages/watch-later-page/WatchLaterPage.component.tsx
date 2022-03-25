import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";

import MovieList, {
  EListType,
} from "../../components/movie-list/MovieList.component";
import { TRootStoreType } from "../../redux/store";

const WatchLaterPageStyled = styled.div`
  height: calc(100vh - 120px);

  padding: 0 10px;

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

const WatchLaterPage: React.FunctionComponent = () => {
  const { saveList } = useSelector((state: TRootStoreType) => state);
  const classes = useStyles();

  return (
    <WatchLaterPageStyled>
      <Typography className={classes.pageTitle}>Watch Later</Typography>
      <MovieList
        movies={saveList.watchLaterList}
        listType={EListType.LIST_TYPE_WATCHLATER}
      />
    </WatchLaterPageStyled>
  );
};

export default WatchLaterPage;
