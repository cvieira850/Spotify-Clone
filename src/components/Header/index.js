import React from "react";

import { Container, Search, User } from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="search" />
    </Search>

    <User>
      <img
        src="https://avatars2.githubusercontent.com/u/45169261?v=4"
        alt="Avatar"
      />
      Caio Vieira
    </User>
  </Container>
);

export default Header;
