import {View, Text} from 'react-native';
import React, {useState, useContext} from 'react';
import NextHeader from '@components/login/nextheader';
import styles from './style';
import {AuthContext} from '@context/context';
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';

const NextLogin = ({navigation, route}) => {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [login, setLogin] = useState(false);

  const email = route.params.email;
  const {getAuth} = useContext(AuthContext);

  const goRegister = () => {
    let data = {
      userEmail: email,
      userPwd: password,
      userPwdConfirm: passwordConfirm,
    };
    RNSecureKeyStore.set('@user.data', JSON.stringify(data), {
      accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
    }).then(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      },
    );
    getAuth(true);
  };

  return (
    <View style={styles.maincontainer}>
      <View>
        <NextHeader
          title={'Security For Register'}
          action={goRegister}
          buttonText={'Register'}
          passValue={password}
          onChangePass={val => setPassword(val)}
          passConValue={passwordConfirm}
          onChangePassCon={val => setPasswordConfirm(val)}
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
