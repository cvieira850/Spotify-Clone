import React, { Fragment } from "react";

import GlobalStyle from "./styles/global";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";

import { Wrapper, Container, Content } from "./styles/components";
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const divisivelTres = array.filter(v => v % 3 === 0);
const App = () => (
  <Fragment>
    <GlobalStyle />
    <Wrapper>
      <Container>
        <Sidebar />
        <Content>
          <Header />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  </Fragment>
);

export default App;
