import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#D5FAFA',
  },
  devContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  devTexta: {
    color: 'black',
  },
  devTextb: {
    color: 'red',
  },
});

export default styles;
