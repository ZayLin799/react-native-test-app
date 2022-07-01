import {View, Text, Pressable, Modal, TouchableOpacity} from 'react-native';
import React, {useState, useContext} from 'react';
import Header from '@components/login/header';
import styles from './style';
import {AuthContext} from '@context/context';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const next = () => {
    navigation.navigate('NextLogin', {email: email});
    console.log('login-email ::', email);
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
      {/* modal box for languages */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredViewsec}>
            <View style={styles.modalView}>
              <Pressable style={[styles.button, styles.buttonOpen]}>
                <Text style={styles.textStyle}>English</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonOpen, {marginTop: 20}]}>
                <Text style={styles.textStyle}>Myanmar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose, {marginTop: 20}]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Language</Text>
        </Pressable>
      </View>

      <Header
        title={'Login'}
        action={next}
        buttonText={'Next'}
        emailValue={email}
        onChangeEmail={val => setEmail(val)}
        footerText={'register'}
        eggeg
        isLogin={login}
        footerAction={footerHandler}
      />

      {/* for dev name */}
      <View style={styles.devContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.devTexta}>Developed by </Text>
          <Text style={styles.devTextb}>Zay Lin</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
