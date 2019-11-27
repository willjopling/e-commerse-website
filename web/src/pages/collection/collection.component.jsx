import React from "react";

import CollectionItem from "../../components/collection-item/colleciton-item.component";
import { CollectionContainer } from "./collection.styles";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <CollectionContainer>
      <h2>COLLECTION PAGE</h2>
    </CollectionContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
