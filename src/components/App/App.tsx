import React from "react";
import { Route, Routes } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import styled, { createGlobalStyle } from "styled-components";

import FavPage from "../../pages/fav-page/FavPage.component";
import HomePage from "../../pages/homepage/HomePage.component";
import WatchLaterPage from "../../pages/watch-later-page/WatchLaterPage.component";
import { device } from "../../utils/util";
import Header from "../header/Header.component";
import MovieDetails from "../movie-detail/MovieDetail.component";
import NavBottom from "../nav-bottom/NavBottom.component";

const GlobalStyle = createGlobalStyle`

body {
  padding: 0;
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;

  -ms-overflow-style: none;
}
::-webkit-scrollbar {
  display: none;
}
`;

const AppStyled = styled.div`
  width: 100vw;
  // height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin-top: 57px;
`;

const routes = (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/search" element={<HomePage />} />
    <Route path="/favourites" element={<FavPage />} />
    <Route path="/watchlater" element={<WatchLaterPage />} />
  </Routes>
);

function App() {
  /*
    I'm using useNediaQuery Hook from MaterialUI to run media query breakpoints
   */
  const isGreaterThanTablet = useMediaQuery(device.tablet);
  return (
    <React.Fragment>
      <GlobalStyle />
      <AppStyled>
        <Header />
        {/* This component is modal component and appears when a
        redux dispatch named "toggleModalVisibility" triggers */}
        <MovieDetails />
        {routes}
        {/*
        If the user device is desktop, then avoid showing the Navigation Bar at the bottom
         */}
        {!isGreaterThanTablet && <NavBottom />}
      </AppStyled>
    </React.Fragment>
  );
}

export default App;
