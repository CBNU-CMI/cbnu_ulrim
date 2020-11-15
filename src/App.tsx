/* External dependencies */
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

/* Internal dependencies */
import { TodoListPage } from 'pages';
import { GlobalStyle } from 'styles/global-styles';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={TodoListPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
