/* External dependencies */
import { takeEvery } from 'redux-saga/effects';
import Immutable from 'immutable';

/* Internal dependencies */
import Petition from 'models/Petition';
import {
  AsyncActionTypes,
  actionCreator,
  createAsyncActionsAndSaga,
} from 'utils/reduxUtils';
import * as petitionAPI from 'api/PetitionAPI';

type Action = AsyncActionTypes<typeof getPetitionListAsyncActions>;

interface State {
  petitionList: Immutable.List<Petition>;
  getPetitionListFetching: boolean;
  getPetitionListSuccess: boolean;
  getPetitionListError: boolean;
}

const GET_PETITION_LIST = 'petition/GET_PETITION_LIST' as const;
const GET_PETITION_LIST_FETCHING = 'petition/GET_PETITION_LIST_FETCHING' as const;
const GET_PETITION_LIST_SUCCESS = 'petition/GET_PETITION_LIST_SUCCESS' as const;
const GET_PETITION_LIST_ERROR = 'petition/GET_PETITION_LIST_ERROR' as const;

export const getPetitionList = actionCreator(GET_PETITION_LIST, {
  usePromise: true,
});

const {
  asyncActions: getPetitionListAsyncActions,
  asyncSaga: getPetitionListaga,
} = createAsyncActionsAndSaga(
  GET_PETITION_LIST_FETCHING,
  GET_PETITION_LIST_SUCCESS,
  GET_PETITION_LIST_ERROR,
)<
  ReturnType<typeof getPetitionList>,
  petitionAPI.GetPetitionListResponseType,
  any
>(petitionAPI.getPetitionList);

export function* petitionSaga() {
  yield takeEvery(GET_PETITION_LIST, getPetitionListaga);
}

const initialState = {
  petitionList: Immutable.List(),
  getPetitionListFetching: false,
  getPetitionListSuccess: false,
  getPetitionListError: false,
};

function petitionReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case GET_PETITION_LIST_FETCHING:
      return {
        ...state,
        getPetitionListFetching: true,
        getPetitionListSuccess: false,
        getPetitionListError: false,
      };
    case GET_PETITION_LIST_SUCCESS:
      return {
        ...state,
        petitionList: state.petitionList.clear().withMutations(list => {
          action.payload.petitionList
            .map(petition => new Petition(petition))
            .forEach(petition => list.push(petition));
        }),
        getPetitionListFetching: false,
        getPetitionListSuccess: true,
      };
    case GET_PETITION_LIST_ERROR:
      return {
        ...state,
        getPetitionListFetching: false,
        getPetitionListError: true,
      };
    default:
      return state;
  }
}

export default petitionReducer;
