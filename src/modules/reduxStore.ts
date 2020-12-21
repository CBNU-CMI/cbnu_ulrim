/* External dependencies */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

/* Internal dependencies */
import rootReducer, { rootSaga } from 'modules/reducers';
import { isDevelopment } from 'utils/environmentUtils';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
  }
}

class ReduxStore {
  readonly store;

  constructor() {
    const devtools =
      (isDevelopment() && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
      compose;
    const composeEnhancers = devtools || compose;

    const sagaMiddleware = createSagaMiddleware();
    this.store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(sagaMiddleware)),
    );
    sagaMiddleware.run(rootSaga);
  }

  getStore() {
    return this.store;
  }

  dispatch(action) {
    return this.store.dispatch(action);
  }

  getState() {
    return this.store.getState();
  }
}

export default new ReduxStore();
