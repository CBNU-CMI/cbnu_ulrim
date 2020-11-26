/* External dependencies */
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

/* Internal dependencies */
import PetitionPage from 'pages/PetitionPage';
import PollPage from 'pages/PollPage';
import LoginPage from 'pages/LoginPage';
import { GlobalStyle } from 'styles/global-styles';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PetitionPage} />
        <Route path="/petition" exact component={PetitionPage} />
        <Route path="/poll" exact component={PollPage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
