import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import visibility from '../asset/image/visibility.png';
import witness from '../asset/image/witness.png';
const ItemInput = (props) => {
  const [isShowPass, setShowPass] = useState(true);

  return props.isPass ? (
    <View style={styles.layoutInput}>
      <Text style={styles.titleInput}>{props.title}</Text>
      <TextInput
        onChangeText={(text) => props.onChange(text)}
        secureTextEntry={isShowPass}
        style={styles.textInput}
      />
      <TouchableOpacity
        style={styles.showPassword}
        onPress={() => {
          setShowPass(!isShowPass);
        }}
      >
        <Image source={isShowPass ? visibility : witness} />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.layoutInput}>
      <Text style={styles.titleInput}>{props.title}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => props.onChange(text)}
        value={props.value}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  layoutInput: {
    marginTop: 15,
  },
  titleInput: {
    color: 'gray',
    fontSize: 15,
    marginBottom: 10,
  },
  textInput: {
    height: 45,
    borderColor: '#dddddd',
    borderWidth: 1,
  },
  showPassword: {
    position: 'absolute',
    right: 10,
    top: 42,
  },
});

export default ItemInput;
