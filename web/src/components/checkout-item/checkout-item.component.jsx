import React from "react";
import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Price,
  RemoveButton
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <CheckoutItemContainer>
    <ImageContainer>
      <img alt="item" src={imageUrl} />
    </ImageContainer>
    <Name>{name}</Name>
    <Quantity>{quantity}</Quantity>
    <Price>{price}</Price>
    <RemoveButton>&#10005</RemoveButton>
  </CheckoutItemContainer>
);

export default CheckoutItem;
