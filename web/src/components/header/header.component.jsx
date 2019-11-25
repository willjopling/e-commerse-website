import React from "react";

import { Link } from "react-router-dom";

import { Container, Options } from "./header.styles";

import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => (
  <Container>
    <Link to="/" className="logo">
      <Logo className="logo" />
    </Link>
    <Options>
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>
    </Options>
  </Container>
);

export default Header;
