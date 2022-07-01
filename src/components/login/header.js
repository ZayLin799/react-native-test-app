import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import styles from './style';

const Header = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={props.emailPlaceHolder}
          placeholderTextColor="#8A9399"
          style={[styles.input]}
          value={props.emailValue}
          onChangeText={props.onChangeEmail}
        />
      </View>
      <TouchableOpacity
        // disabled={!props.emailValue}
        style={styles.buttonContainer}
        onPress={props.action}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>{props.buttonText}</Text>
      </TouchableOpacity>
      <View style={styles.accContainer}>
        {props.isLogin ? (
          <Text style={styles.accText}>{props.noAccText}</Text>
        ) : (
          <Text style={styles.accText}>{props.accText}</Text>
        )}
        <TouchableOpacity onPress={props.footerAction}>
          <Text style={styles.footerText}>{props.footerText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
