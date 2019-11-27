import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Image,
  CollectionFooter,
  Name,
  Price
} from "./collection-item.styles";

import CustomButton from "../custom-button/custom-button.component";
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
      <CustomButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </CustomButton>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
