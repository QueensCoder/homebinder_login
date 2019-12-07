import React from "react";
import { FormContainer, ImageContainer, Image } from "./styled-components";

const HomePage = () => {
  console.log("got home");
  return (
    <FormContainer>
      <ImageContainer>
        <Image src="images/logo.png" />
        <h1>Welcome Home</h1>
      </ImageContainer>
    </FormContainer>
  );
};

export default HomePage;
