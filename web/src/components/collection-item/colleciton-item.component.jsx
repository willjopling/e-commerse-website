import React from "react";

import {
  Container,
  Image,
  CollectionFooter,
  Name,
  Price
} from "./collection-item.styles";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <Container id={id}>
    <Image
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <CollectionFooter>
      <Name>{name}</Name>
      <Price>{price}</Price>
    </CollectionFooter>
  </Container>
);

export default CollectionItem;
