import { put, call, takeLatest } from 'redux-saga/effects';
import LoginActions, { LoginTypes } from './actions';
import { startup } from '../../AppRedux/actions';
import { userLoginApi } from '../../../api/auth';

export function* userLoginSaga({ data }) {
  // try {
  console.log('run sagas');
  //   const response = yield call(userLoginApi, data);
  //   const newResponse = {
  //     data: response.data,
  //     token: response.data.token,
  //   };
  //   yield put(LoginActions.userLoginSuccess(newResponse));
  //   yield put(startup());
  // } catch (error) {
  //   console.log(error);
  //   yield put(LoginActions.userLoginFailure(error));
  // }
}

const loginSagas = () => [takeLatest(LoginTypes.USER_LOGIN, userLoginSaga)];

export default loginSagas();
