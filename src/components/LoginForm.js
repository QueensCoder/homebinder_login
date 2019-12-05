import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px 10px;
  background-color: #white;
  width: 50%;
  margin: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: #333;
  margin: 2% 0 0 0;
`;

const EmailInput = styled.input`
  width: 50%;
`;
const PassInput = styled.input`
  width: 50%;
`;
const LoginBtn = styled.button`
  background-color: #f63;
  border-color: #ff5319;
  padding: 1% 2%;
  font-size: 1rem;
  line-height: 2rem;
  border-radius: 4%;
  color: white;
  align-self: flex-start;
`;

const LinksDiv = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  margin-top: 4%;
  border-radius: 4%;
`;

const Image = styled.img``;

const Hometag = styled.p``;

const LoginForm = () => {
  return (
    <FormContainer>
      <ImageContainer>
        <Image src="images/logo.png" />
      </ImageContainer>
      <Form
        onSubmit={evt => {
          evt.preventDefault();
          console.log("hi");
        }}
      >
        <EmailInput placeholder="Email" type="email" />
        <PassInput placeholder="Password" type="password" />
        <LoginBtn>Login</LoginBtn>
        <LinksDiv>
          <Link to="www.google.com">Sign Up</Link>
          <p>|</p>
          <Link to="www.google.com">Reset Password</Link>
          <Hometag>© 2019 HomeBinder</Hometag>
        </LinksDiv>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
