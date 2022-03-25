import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { device } from "../../utils/util";
import NavBottom from "../nav-bottom/NavBottom.component";
import HomePage from "../../pages/homepage/HomePage.component";
import FavPage from "../../pages/fav-page/FavPage.component";
import Header from "../Header/Header.component";

const AppStyled = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const NavBottomStyled = styled(NavBottom)`
  display: none;
  @media (min-width: ${device.tablet}) {
    display: none;
  }
`;

function App() {
  return (
    <AppStyled>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<HomePage />} />
        <Route path="/favourites" element={<FavPage />} />
        {/* <Route path="/watch" element={} /> */}
      </Routes>
      <NavBottomStyled />
    </AppStyled>
  );
}

export default App;
