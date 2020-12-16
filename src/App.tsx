/* External dependencies */
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

/* Internal dependencies */
import PetitionPage from 'pages/PetitionPage';
import PetitionWrite from 'components/Petition/PetitionWrite';
import PollPage from 'pages/PollPage';
import LoginPage from 'pages/LoginPage';

import SignupPage from 'pages/SignupPage';
import ForgotPage from 'pages/ForgotPage';
import PrivacyPage from 'pages/PrivacyPage';
import { GlobalStyle } from 'styles/global-styles';
import Navigation from 'components/Global/Navigation';

const MainLayout = styled.div`
  width: 65%;
  margin: 0 auto;
  position: relative;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Navigation />
        <Switch>
          <Route path="/" exact component={PetitionPage} />
          <Route path="/petition" exact component={PetitionPage} />
          <Route path="/petition/write" component={PetitionWrite} />
          <Route path="/poll" component={PollPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/forgot" component={ForgotPage} />
          <Route path="/privacy" component={PrivacyPage} />
        </Switch>
        <GlobalStyle />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
