import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import { CartDropdownContainer, CartItems } from "./cart-dropdown.styles";

const CartDropdown = () => (
  <CartDropdownContainer>
    <CartItems />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </CartDropdownContainer>
);

export default CartDropdown;
