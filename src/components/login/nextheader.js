import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import CheckBox from '@react-native-community/checkbox';

const nextheader = props => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={props.passwordPlaceHolder}
          placeholderTextColor="#8A9399"
          secureTextEntry
          style={[styles.input, {marginTop: 20}]}
          value={props.passValue}
          onChangeText={props.onChangePass}
        />
        {!props.isLogin && (
          <TextInput
            placeholder={props.conpasswordPlaceHolder}
            placeholderTextColor="#8A9399"
            style={[styles.input, {marginTop: 20}]}
            value={props.passConValue}
            onChangeText={props.onChangePassCon}
          />
        )}
        {props.isLogin && (
          <View style={styles.checkboxContainer}>
            <CheckBox
              tintColors={{true: '#2196F3', false: 'black'}}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text style={styles.checkboxText}>{props.remember}</Text>
          </View>
        )}
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={props.action}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>{props.buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default nextheader;
