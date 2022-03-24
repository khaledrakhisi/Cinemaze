import styled from "styled-components";

import Header from "./components/Header/Header.component";
import NavBottom from "./components/nav-bottom/NavBottom.component";
import HomePage from "./pages/homepage/HomePage.component";
import { device } from "./utils/util";

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
      <HomePage />
      <NavBottomStyled />
    </AppStyled>
  );
}

export default App;
