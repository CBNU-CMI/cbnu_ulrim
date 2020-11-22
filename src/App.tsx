/* External dependencies */
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

/* Internal dependencies */
import { PetitionPage } from 'pages';
import { GlobalStyle } from 'styles/global-styles';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={PetitionPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
