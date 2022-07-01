import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  devContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  devTexta: {
    color: 'black',
    fontFamily: 'RobotoMono-Italic',
  },
  devTextb: {
    color: 'red',
    fontFamily: 'RobotoMono-Italic',
  },
});

export default styles;
