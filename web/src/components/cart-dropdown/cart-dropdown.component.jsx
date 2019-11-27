import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { CartDropdownContainer, CartItems } from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems }) => (
  <CartDropdownContainer>
    <CartItems>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </CartItems>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </CartDropdownContainer>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems: cartItems
});

export default connect(mapStateToProps)(CartDropdown);
