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
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [login, setLogin] = useState(false);

  const email = route.params.email;
  const {getAuth, lang, getLang} = useContext(AuthContext);
  const local = useLocal();

  const goRegister = () => {
    if (password == '' || passwordConfirm == '') {
      ToastAndroid.show(`Please fill information!`, ToastAndroid.SHORT);
    } else {
      if (password == passwordConfirm) {
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
      } else {
        ToastAndroid.show(`Password didn't match!`, ToastAndroid.SHORT);
      }
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
        action={goRegister}
        buttonText={local.register}
        passValue={password}
        onChangePass={val => setPassword(val)}
        passwordPlaceHolder={local.pwdPlaceholder}
        conpasswordPlaceHolder={local.conpwdPlaceholder}
        passConValue={passwordConfirm}
        onChangePassCon={val => setPasswordConfirm(val)}
        isLogin={login}
      />

      <DevFooter />
    </View>
  );
};

export default NextLogin;
