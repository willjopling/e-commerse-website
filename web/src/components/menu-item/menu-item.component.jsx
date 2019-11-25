import React from "react";
import { MenuItemContainer } from "./menu-item.styles";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    className={`${size} menu-item`}
    onClick={() => {
      history.push(`${match.url}${linkUrl}`);
    }}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">FIND IT HERE</span>
    </div>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
