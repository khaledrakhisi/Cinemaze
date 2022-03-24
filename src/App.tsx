import styled from "styled-components";

import Header from "./components/Header/Header.component";
import HomePage from "./pages/homepage/HomePage.component";

const AppStyled = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

function App() {
  return (
    <AppStyled>
      <Header />
      <HomePage />
    </AppStyled>
  );
}

export default App;
