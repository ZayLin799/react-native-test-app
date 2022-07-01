import {View, Text, Pressable, Modal, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './style';

const lamguagemodal = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const getLanguage = props.Language;
  return (
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
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => getLanguage('en')}>
              <Text style={styles.textStyle}>{props.langen}</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonOpen, {marginTop: 20}]}
              onPress={() => getLanguage('mm')}>
              <Text style={styles.textStyle}>{props.langmm}</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose, {marginTop: 20}]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>{props.close}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>{props.langde}</Text>
      </Pressable>
    </View>
  );
};

export default lamguagemodal;
