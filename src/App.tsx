/* External dependencies */
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

/* Internal dependencies */
import PetitionPage from 'pages/PetitionPage';
import PetitionWrite from 'components/Petition/PetitionWrite';
import PollPage from 'pages/PollPage';
import LoginPage from 'pages/LoginPage';
import { GlobalStyle } from 'styles/global-styles';
import Navigation from 'components/Global/Navigation';

const MainLayout = styled.div`
  width: 65%;
  margin: 0 auto;
  position: relative;
`;

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Navigation />
        <Switch>
          <Route path="/" exact component={PollPage} />
          <Route path="/petition" exact component={PetitionPage} />
          <Route path="/petition/write" exact component={PetitionWrite} />
          <Route path="/poll" exact component={PollPage} />
          <Route path="/login" exact component={LoginPage} />
        </Switch>
        <GlobalStyle />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
