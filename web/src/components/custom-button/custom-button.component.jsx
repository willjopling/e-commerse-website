import React from "react";

import { Container } from "./custom-button.styles";

const CustomButton = ({
  children,

  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <Container
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </Container>
);

export default CustomButton;
