import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import Login from '../screens/Authentication/Login';
import store from '../redux/store';
import Home from '../screens/Home/index';
import SignUp from '../screens/Authentication/SignUp';

function ReduxProvider(Component) {
  return (props) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

export function registerScreens() {
  Navigation.registerComponent(
    'Login',
    () => ReduxProvider(Login),
    () => Login,
  );
  Navigation.registerComponent(
    'HomePage',
    () => ReduxProvider(Home),
    () => Home,
  );
  Navigation.registerComponent(
    'SignUp',
    () => ReduxProvider(SignUp),
    () => SignUp,
  );
}
