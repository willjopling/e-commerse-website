import React from "react";
import { MenuItemContainer, BackgroundImage } from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size }) => (
  <MenuItemContainer className={`${size} menu-item`}>
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

export default MenuItem;
