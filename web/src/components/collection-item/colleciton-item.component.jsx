import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Image,
  CollectionFooter,
  Name,
  Price,
  CollectionItemCustomButton
} from "./collection-item.styles";

import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <Container>
      <Image
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CollectionFooter>
      <CollectionItemCustomButton
        className="custom-button"
        isInverted
        onClick={() => addItem(item)}
      >
        ADD TO CART
      </CollectionItemCustomButton>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
