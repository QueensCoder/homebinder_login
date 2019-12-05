import React from "react";
import { LoginForm } from "./components";

import styled from "styled-components";

const ContactBanner = styled.h3`
  text-align: center;
  font-family: Arvo, "Open Sans", Arial, sans-serif;
`;

const AppContainer = styled.div`
  margin-top: 4%;
`;

const App = () => {
  return (
    <AppContainer>
      <LoginForm />

      <ContactBanner>
        Need help? No problem! Email support@homebinder.com or Call 800-377-6915
      </ContactBanner>
    </AppContainer>
  );
};

export default App;
