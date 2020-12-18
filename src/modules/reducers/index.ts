/* External dependencies */
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

/* Internal dependencies */
import petitionReducer, { petitionSaga } from './petitionReducer';

const rootReducer = combineReducers({
  petitionReducer,
});

export function* rootSaga() {
  yield all([petitionSaga()]);
}

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
