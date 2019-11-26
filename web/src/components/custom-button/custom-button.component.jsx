import React from "react";

import { Container } from "./custom-button.styles";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <Container className={isGoogleSignIn ? "google-sign-in" : ""} {...otherProps}>
    {children}
  </Container>
);

export default CustomButton;
