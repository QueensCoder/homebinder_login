import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px 10px;
  background: papayawhip;
  color: palevioletred;
  width: 50%;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
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

const Image = styled.img``;

const LoginForm = () => {
  return (
    <FormContainer>
      <ImageContainer>
        <Image src="images/logo.png" />
      </ImageContainer>
      <Title>Some title stuff</Title>
    </FormContainer>
  );
};

export default LoginForm;
