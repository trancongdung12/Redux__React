import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const AppTypes = makeConstantCreator('STARTUP');

export const startup = () => makeActionCreator(AppTypes.STARTUP);
export const loading = () => makeActionCreator(AppTypes.LOADING);
export const clearLoading = () => makeActionCreator(AppTypes.CLEAR_LOADING);
