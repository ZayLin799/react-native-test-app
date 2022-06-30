import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {AuthContext} from '../context/context';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './stack/AuthStack';
import DashboardStack from './stack/DashboardStack';
import styles from '../components/login/style';
import appstyles from './appstyle';

const appNavigator = () => {
  const [auth, setAuth] = useState(false);
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 3000);
  });

  const context = {
    auth,
    getAuth: value => {
      setAuth(value);
    },
  };

  if (splashScreen) {
    return (
      <View style={appstyles.container}>
        <View style={appstyles.imgcontainer}>
          <Image
            style={appstyles.tinyLogo}
            source={require('../../assets/images/tiny_logo.png')}
          />
        </View>
        <Text>Zay Lin</Text>
      </View>
    );
  } else if (auth) {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <DashboardStack />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  } else {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }
};

export default appNavigator;
