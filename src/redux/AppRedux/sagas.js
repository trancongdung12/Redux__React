import { takeLatest, select, put } from 'redux-saga/effects';
import { AppTypes } from '../AppRedux/actions';
import http from '../../api/http';

export function* startupSaga() {
  try {
    const { token } = yield select((state) => state.login);
    const { language } = yield select((state) => state.app);

    http.setAuthorizationHeader(token, language);
    const { isSkip } = yield select((state) => state.app);

    // if (token) {
    //   NavigationUtils.startMainContent();
    // } else {
    //   isSkip ? NavigationUtils.startLoginContent() : NavigationUtils.startWelcomeScreen();
    // }
  } catch (error) {
    // NavigationUtils.startLoginContent();
    console.log(error);
  }
}

const appSagas = () => {
  return [takeLatest(AppTypes.STARTUP, startupSaga)];
};

export default appSagas();
