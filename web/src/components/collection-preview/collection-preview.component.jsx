import React from "react";

import { Preview, Container, Title } from "./collection-preview.styles";
import CollectionItem from "../collection-item/colleciton-item.component";

const CollectionPreview = ({ title, items }) => (
  <Container>
    <Title>{title.toUpperCase()}</Title>
    <Preview>
      {items
        .filter((item, idx) => {
          return idx < 4;
        })
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem id={id} {...otherItemProps} />
        ))}
    </Preview>
  </Container>
);

export default CollectionPreview;
