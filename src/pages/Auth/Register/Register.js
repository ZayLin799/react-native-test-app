import {View, Text, ToastAndroid} from 'react-native';
import React, {useState, useContext} from 'react';
import Header from '@components/login/header';
import DevFooter from '@components/devfooter/devfooter';
import styles from './style';
import {AuthContext} from '@context/context';
import LanguageModal from '@components/languagemodal/languagemodal';
import {useLocal} from '../../../hook';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState(false);

  const {lang, getLang} = useContext(AuthContext);
  const local = useLocal();

  const next = () => {
    if (email == '') {
      ToastAndroid.show(`Please fill information!`, ToastAndroid.SHORT);
    } else {
      navigation.navigate('NextRegister', {email: email});
    }
  };

  const footerHandler = () => {
    if (login) {
      navigation.navigate('Register');
    } else {
      navigation.navigate('Login');
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
      <Header
        title={local.register}
        action={next}
        buttonText={local.buttonText}
        emailValue={email}
        emailPlaceHolder={local.emailPlaceholder}
        onChangeEmail={val => setEmail(val)}
        footerText={local.footerTextre}
        accText={local.already}
        isLogin={login}
        footerAction={footerHandler}
      />
      <DevFooter />
    </View>
  );
};

export default Register;
