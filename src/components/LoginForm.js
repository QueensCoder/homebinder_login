import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FormContainer,
  ImageContainer,
  Form,
  Image,
  EmailInput,
  PassInput,
  LoginBtn,
  LinksDiv,
  Hometag
} from "./styled-components";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <FormContainer>
      <ImageContainer>
        <Image src="images/logo.png" />
      </ImageContainer>
      <Form
        onSubmit={evt => {
          evt.preventDefault();
        }}
      >
        <EmailInput
          placeholder="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <PassInput
          placeholder="Password"
          type="password"
          minLength={8}
          value={pass}
          onChange={e => setPass(e.target.value)}
        />
        <LoginBtn>Login</LoginBtn>
        <LinksDiv>
          <Link to="/signup">Sign Up</Link>
          <p>|</p>
          <Link to="/reset">Reset Password</Link>
          <Hometag>© 2019 HomeBinder</Hometag>
        </LinksDiv>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
