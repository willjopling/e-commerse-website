import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { Container, ItemCount } from "./cart-icon.styles";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden }) => (
  <Container onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <ItemCount>0</ItemCount>
  </Container>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
