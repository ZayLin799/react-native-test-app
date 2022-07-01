import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import styles from './style';

const DashBoard = props => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.card_template}>
          <View style={styles.email_container}>
            <Text style={styles.text_card}>{props.emailtext}</Text>
            <Text style={styles.text_card}>{props.email}</Text>
          </View>
          <View style={styles.text_container}>
            <Text style={styles.card_title}>{props.about}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={props.action}
          activeOpacity={0.8}>
          <Text style={styles.buttonText}>{props.logout}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashBoard;
