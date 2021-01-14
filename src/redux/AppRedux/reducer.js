import Immutable from 'seamless-immutable';
import { AppTypes } from './actions';
import { makeReducerCreator } from '../../utils/ReduxUtils';

export const INITIAL_STATE = Immutable({
  loading: null,
  language: null,
  currentLocation: {},
  isSkip: false,
});
const loading = (state) =>
  state.merge({
    loading: true,
  });

const clearLoading = (state) =>
  state.merge({
    loading: null,
  });
const ACTION_HANDLERS = {
  [AppTypes.LOADING]: loading,
  [AppTypes.CLEAR_LOADING]: clearLoading,
};

export default makeReducerCreator(INITIAL_STATE, ACTION_HANDLERS);
