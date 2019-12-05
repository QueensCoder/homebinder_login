import React from "react";

import Routes from "./components/Routes";
import styled from "styled-components";

const ContactBanner = styled.h3`
  text-align: center;
  font-family: Arvo, "Open Sans", Arial, sans-serif;
`;

const Nav = styled.nav`
  margin-top: 4%;
`;

const DivApp = styled.div``;

const App = () => {
  return (
    <DivApp>
      <Nav />
      <Routes />
      <ContactBanner>
        Need help? No problem! Email support@homebinder.com or Call 800-377-6915
      </ContactBanner>
    </DivApp>
  );
};

export default App;
