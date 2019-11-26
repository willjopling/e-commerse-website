import React from "react";
import { Page } from "./sign-in-sign-up.styles";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SigninSignupPage = () => (
  <Page>
    <SignIn />
    <SignUp />
  </Page>
);

export default SigninSignupPage;
