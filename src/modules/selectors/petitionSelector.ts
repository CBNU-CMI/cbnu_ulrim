/* Internal dependencies */
import { RootState } from 'modules/reducers';

export const getPetitionList = (state: RootState) =>
  state.petitionReducer.petitionList;
