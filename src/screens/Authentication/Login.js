/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import ItemInput from '../../components/InputItemForm';
import { Navigation } from 'react-native-navigation';
import SignUp from './SignUp';
import axios from 'react-native-axios';
import HomePage from '../Home/index';
import { useDispatch, useSelector } from 'react-redux';
import LoginActions from '../../redux/Login/actions';
import closeImg from '../../asset/image/close.png';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.loginReducer.loadingLogin);
  const isError = useSelector((state) => state.loginReducer.errorLogin);
  const onHandleLogin = () => {
    let data = {
      email: username,
      password: password,
    };

    dispatch(LoginActions.userLogin(data));
    let url = 'https://proxibox-pharma-api-staging.enouvo.com/api/v1/auth/login';
    axios
      .post(url, data)
      .then(function (response) {
        if (response.status === 200) {
          dispatch(LoginActions.userLoginSuccess(response));
          RedirectHomePage();
        }
      })
      .catch(function (error) {
        dispatch(LoginActions.userLoginFailure(error.response.data.messageCode));
        // Alert.alert('Error', error.response.data.messageCode);
      });
  };
  const onChangeUserName = (text) => {
    setUsername(text);
  };
  const onChangePassword = (text) => {
    setPassword(text);
  };
  const RedirectHomePage = () => {
    Navigation.push(props.componentId, {
      component: {
        name: 'HomePage',
        options: {
          topBar: {
            height: 0,
            visible: false,
          },
        },
      },
    });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.layoutTitle}>
        <Image style={styles.closeImage} source={closeImg} />
        <Text style={styles.title}>Đăng nhập</Text>
      </View>
      <ItemInput title="Tên tài khoản*" onChange={onChangeUserName} />
      <ItemInput title="Mật khẩu*" isPass={true} onChange={onChangePassword} />
      {isLoading && <ActivityIndicator size="large" color="#25969E" />}
      <Text style={styles.errorText}>{isError}</Text>
      <View style={styles.layoutButton}>
        <TouchableOpacity onPress={onHandleLogin} style={styles.loginButton}>
          <Text style={styles.textLogin}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'SignUp',
                options: {
                  topBar: {
                    height: 0,
                    visible: false,
                  },
                },
              },
            })
          }
          style={styles.signUpButton}
        >
          <Text style={styles.textSignUp}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.policy}>
        Bằng việc xác nhận tạo tài khoản, bạn đã đồng ý với
        <Text style={{ color: '#25969E' }}>điều khoản quy định</Text> của chúng tôi
      </Text>
    </ScrollView>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  layoutTitle: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  closeImage: {
    height: 20,
    width: 20,
    marginTop: 7,
  },
  title: {
    color: '#505050',
    fontSize: 25,
    marginLeft: '32%',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  layoutButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    paddingHorizontal: 20,
  },
  loginButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: '#41B8C1',
    borderWidth: 2,
  },
  signUpButton: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#41B8C1',
    borderColor: '#41B8C1',
    borderWidth: 2,
  },
  textSignUp: {
    color: 'white',
  },
  policy: {
    marginTop: 30,
    paddingHorizontal: 10,
    color: 'gray',
    textAlign: 'center',
  },
});

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Login',
              options: {
                topBar: {
                  height: 0,
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
});
Navigation.registerComponent('HomePage', () => HomePage);
Navigation.registerComponent('SignUp', () => SignUp);
Navigation.registerComponent('Login', () => Login);
