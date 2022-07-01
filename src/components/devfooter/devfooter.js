import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';

const devfooter = () => {
  return (
    <View style={styles.devContainer}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.devTexta}>Developed by </Text>
        <Text style={styles.devTextb}>Zay Lin</Text>
      </View>
    </View>
  );
};

export default devfooter;
