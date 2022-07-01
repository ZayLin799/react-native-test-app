import {View, Text} from 'react-native';
import React, {useState, useContext} from 'react';
import NextHeader from '@components/login/nextheader';
import styles from './style';
import {AuthContext} from '@context/context';
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';

const NextLogin = ({navigation, route}) => {
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(true);

  const email = route.params.email;
  const {getAuth} = useContext(AuthContext);

  const goLogin = () => {
    const userData = RNSecureKeyStore.get('@user.data').then(
      res => {
        console.log(res, 'Response data');
      },
      err => {
        console.log(err);
      },
    );
    console.log('login-password ::', password);
    getAuth(true);
  };

  return (
    <View style={styles.maincontainer}>
      <View>
        <NextHeader
          title={'Security For Login'}
          action={goLogin}
          buttonText={'Login'}
          passValue={password}
          onChangePass={val => setPassword(val)}
          isLogin={login}
        />
      </View>
      <View style={styles.devContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.devTexta}>Developed by </Text>
          <Text style={styles.devTextb}>Zay Lin</Text>
        </View>
      </View>
    </View>
  );
};

export default NextLogin;
