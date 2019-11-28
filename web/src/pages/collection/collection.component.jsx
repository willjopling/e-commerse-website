import React from "react";

import CollectionItem from "../../components/collection-item/colleciton-item.component";
import { CollectionContainer, Title, Items } from "./collection.styles";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionContainer>
      <Title>{title}</Title>
      <Items>
        {items.map(item => (
          <CollectionItem
            key={item.id}
            item={item}
            className="collection-item"
          />
        ))}
      </Items>
    </CollectionContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
