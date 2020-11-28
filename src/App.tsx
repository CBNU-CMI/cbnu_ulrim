/* External dependencies */
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

/* Internal dependencies */
import PetitionPage from 'pages/PetitionPage';
import PollPage from 'pages/PollPage';
import LoginPage from 'pages/LoginPage';
import SignupPage from 'pages/SignupPage';
import ForgotPage from 'pages/ForgotPage';
import PrivacyPage from 'pages/PrivacyPage';
import { GlobalStyle } from 'styles/global-styles';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PetitionPage} />
        <Route path="/petition" exact component={PetitionPage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/forgot" exact component={ForgotPage} />
        <Route path="/poll" exact component={PollPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/privacy" exact component={PrivacyPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
