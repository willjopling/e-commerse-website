import React from "react";

import { Container, SignInForm, Title } from "./sign-in.styles";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <Container>
        <Title>I already have an account</Title>
        <span> Sign in with your email and password</span>

        <SignInForm onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <CustomButton type="submit">Sign in</CustomButton>
        </SignInForm>
        <CustomButton onClick={signInWithGoogle}>
          Sign in with Google
        </CustomButton>
      </Container>
    );
  }
}

export default SignIn;
