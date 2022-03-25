import { Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import useMediaQuery from "@mui/material/useMediaQuery";
import { device } from "../../utils/util";
import NavBottom from "../nav-bottom/NavBottom.component";
import HomePage from "../../pages/homepage/HomePage.component";
import FavPage from "../../pages/fav-page/FavPage.component";
import Header from "../Header/Header.component";
import WatchLaterPage from "../../pages/watch-later-page/WatchLaterPage.component";

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
}

`;

const AppStyled = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

function App() {
  /*
    I'm using useNediaQuery Hook from MaterialUI to run media query breakpoints
   */
  const isGreaterThanTablet = useMediaQuery(device.tablet);
  return (
    <>
      <GlobalStyle />
      <AppStyled>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<HomePage />} />
          <Route path="/favourites" element={<FavPage />} />
          <Route path="/watchlater" element={<WatchLaterPage />} />
        </Routes>

        {!isGreaterThanTablet && <NavBottom />}
      </AppStyled>
    </>
  );
}

export default App;
