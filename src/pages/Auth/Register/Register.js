import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Header from '@components/login/header';
import styles from './style';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState(false);

  const next = () => {
    navigation.navigate('NextRegister', {email: email});
    console.log('register-email ::', email);
  };

  const footerHandler = () => {
    if (login) {
      navigation.navigate('Register');
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <Header
          title={'Register'}
          action={next}
          buttonText={'Next'}
          emailValue={email}
          onChangeEmail={val => setEmail(val)}
          footerText={'login'}
          isLogin={login}
          footerAction={footerHandler}
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

export default Register;
