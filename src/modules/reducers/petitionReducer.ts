/* External dependencies */
import { takeEvery, put, call } from 'redux-saga/effects';
import Immutable from 'immutable';
import _ from 'lodash';

/* Internal dependencies */
import Petition from 'models/Petition';
import { ActionType, actionCreator } from 'utils/reduxUtils';
import * as petitionAPI from 'api/petitionAPI';

type Action =
  | ActionType<{}, {}, typeof GET_PETITION_LIST_FETCHING>
  | ActionType<{}, {}, typeof GET_PETITION_LIST_SUCCESS>
  | ActionType<{}, {}, typeof GET_PETITION_LIST_ERROR>;

interface State {
  petitionList: Immutable.OrderedMap<number, Petition>;
  petitionListFetching: boolean;
  petitionListSuccess: boolean;
  petitionListError: boolean;
}

const GET_PETITION_LIST = 'petition/GET_PETITION_LIST' as const;
const GET_PETITION_LIST_FETCHING = 'petition/GET_PETITION_LIST_FETCHING' as const;
const GET_PETITION_LIST_SUCCESS = 'petition/GET_PETITION_LIST_SUCCESS' as const;
const GET_PETITION_LIST_ERROR = 'petition/GET_PETITION_LIST_ERROR' as const;

export const getPetitionList = actionCreator(GET_PETITION_LIST);
const getPetitionListFetching = actionCreator(GET_PETITION_LIST_FETCHING);
const getPetitionListSuccess = actionCreator(GET_PETITION_LIST_SUCCESS);
const getPetitionListError = actionCreator(GET_PETITION_LIST_ERROR);

function* getPetitionListSaga() {
  try {
    yield put(getPetitionListFetching());
    const { data } = yield call(petitionAPI.getPetitionList);
    yield put(getPetitionListSuccess(data));
  } catch (error) {
    yield put(getPetitionListError());
  }
}

export function* petitionSaga() {
  yield takeEvery(GET_PETITION_LIST, getPetitionListSaga);
}

const initialState: State = {
  petitionList: Immutable.OrderedMap(),
  petitionListFetching: false,
  petitionListSuccess: false,
  petitionListError: false,
};

function petitionReeucer(state: State = initialState, action: Action) {
  switch (action.type) {
    case GET_PETITION_LIST_FETCHING:
      return {
        ...state,
        petitionListFetching: true,
        petitionListSuccess: false,
        petitionListError: false,
      };
    case GET_PETITION_LIST_SUCCESS:
      return {
        ...state,
        petitionList: state.petitionList.withMutations(list => {
          _.forEach(action.payload, (petition: Petition) => {
            list.set(petition.id, new Petition(petition));
          });
        }),
        petitionListFetching: false,
        petitionListSuccess: true,
      };
    case GET_PETITION_LIST_ERROR:
      return {
        ...state,
        petitionListFetching: false,
        petitionListError: true,
      };
    default:
      return state;
  }
}

export default petitionReeucer;
