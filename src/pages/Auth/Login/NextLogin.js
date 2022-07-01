import {View, Text, ToastAndroid} from 'react-native';
import React, {useState, useContext} from 'react';
import NextHeader from '@components/login/nextheader';
import DevFooter from '@components/devfooter/devfooter';
import styles from './style';
import {AuthContext} from '@context/context';
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';
import LanguageModal from '@components/languagemodal/languagemodal';
import {useLocal} from '../../../hook';

const NextLogin = ({navigation, route}) => {
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(true);

  const email = route.params.email;
  const {getAuth, lang, getLang} = useContext(AuthContext);
  const local = useLocal();

  const actionHandler = () => {
    if (password == '') {
      ToastAndroid.show(`Please fill information!`, ToastAndroid.SHORT);
    } else {
      RNSecureKeyStore.get('@user.data').then(
        res => {
          goLogin(res);
        },
        err => {
          console.log(err);
        },
      );
    }
  };

  const goLogin = res => {
    data = JSON.parse(res);
    if (data.userEmail === email && data.userPwd === password) {
      getAuth(true);
    } else {
      ToastAndroid.show('Email or password wrong!', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.maincontainer}>
      <LanguageModal
        Language={getLang}
        langde={local.language}
        langen={local.english}
        langmm={local.myanmar}
        close={local.close}
      />
      <NextHeader
        title={local.security}
        action={actionHandler}
        buttonText={local.login}
        passValue={password}
        passwordPlaceHolder={local.pwdPlaceholder}
        onChangePass={val => setPassword(val)}
        isLogin={login}
        remember={local.remember}
      />
      <DevFooter />
    </View>
  );
};

export default NextLogin;
