import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import styles from './style';

const Header = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={'Email...'}
          style={[styles.input]}
          value={props.emailValue}
          onChangeText={props.onChangeEmail}
        />
      </View>
      <TouchableOpacity
        disabled={!props.emailValue}
        style={styles.buttonContainer}
        onPress={props.action}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>{props.buttonText}</Text>
      </TouchableOpacity>
      <View style={styles.accContainer}>
        {props.isLogin ? (
          <Text style={styles.accText}>You don't have account, please </Text>
        ) : (
          <Text style={styles.accText}>If you have account, please </Text>
        )}
        <TouchableOpacity onPress={props.footerAction}>
          <Text style={styles.footerText}>{props.footerText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
