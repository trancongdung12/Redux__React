import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';
const Home = (props) => {
  const firstName = useSelector((state) => state.loginReducer.loginResponse.email);
  console.log(firstName);
  // const lastName = useSelector((state) => state.loginReducer.data.lastName);
  const onClose = () => {
    Navigation.push(props.componentId, {
      component: {
        name: 'Login',
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
    <View style={styles.container}>
      <Text>WelCome {firstName}</Text>
      <TouchableOpacity onPress={() => onClose()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
