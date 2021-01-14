import { Navigation } from 'react-native-navigation';
import App from './src/screens/Authentication/Login';

import { registerScreens } from './src/navigation/RegisterScreen';
registerScreens();

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
