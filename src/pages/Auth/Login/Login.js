import {View, Text, Modal, Pressable, TouchableOpacity} from 'react-native';
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
    <View style={{flex: 1}}>
      <View>
        {/* modal box for languages */}
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredViewSec}>
              <View style={styles.modalView}>
                <TouchableOpacity>
                  <Text style={styles.LangText}>English</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={[styles.LangText, {marginTop: 20}]}>
                    Myanmar
                  </Text>
                </TouchableOpacity>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Show Modal</Text>
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
      </View>

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
