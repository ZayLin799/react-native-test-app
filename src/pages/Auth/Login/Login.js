import {
  View,
  Text,
  Pressable,
  Modal,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState, useContext} from 'react';
import Header from '@components/login/header';
import DevFooter from '@components/devfooter/devfooter';
import LanguageModal from '@components/languagemodal/languagemodal';
import styles from './style';
import {AuthContext} from '@context/context';
import {useLocal} from '../../../hook';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState(true);

  const {lang, getLang} = useContext(AuthContext);
  const local = useLocal();

  const next = () => {
    if (email == '') {
      ToastAndroid.show(`Please fill information!`, ToastAndroid.SHORT);
    } else {
      navigation.navigate('NextLogin', {email: email});
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
        title={local.login}
        action={next}
        buttonText={local.buttonText}
        emailValue={email}
        emailPlaceHolder={local.emailPlaceholder}
        onChangeEmail={val => setEmail(val)}
        footerText={local.footerText}
        noAccText={local.noAccount}
        isLogin={login}
        footerAction={footerHandler}
      />

      {/* for dev name */}
      <DevFooter />
    </View>
  );
};

export default Login;
