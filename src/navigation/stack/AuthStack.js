import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Pages
import LoginScreen from '@pages/Auth/Login/Login';
import NextLoginScreen from '@pages/Auth/Login/NextLogin';
import RegisterScreen from '@pages/Auth/Register/Register';
import NextRegisterScreen from '@pages/Auth/Register/NextRegister';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="NextLogin" component={NextLoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="NextRegister" component={NextRegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
