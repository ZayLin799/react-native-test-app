import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(10),
  },
  title: {
    fontSize: 30,
    fontFamily: 'RobotoMono-Italic',
    color: 'black',
  },
  button: {
    backgroundColor: '#ff8899',
    paddingHorizontal: wp('10%'),
    paddingVertical: hp('1%'),
    borderRadius: hp(1),
    marginTop: hp(1),
  },
  inputContainer: {
    width: wp(100),
    alignItems: 'center',
    marginTop: hp(5),
  },
  input: {
    backgroundColor: 'white',
    width: wp(70),
    paddingHorizontal: hp(2),
    paddingVertical: hp(1),
    borderRadius: hp(1),
    margin: 0,
    color: '#8A9399',
    fontFamily: 'RobotoMono-Italic',
  },
  buttonContainer: {
    marginTop: hp(3),
    backgroundColor: '#2196F3',
    width: wp(70),
    paddingVertical: hp(1.8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(0.5),
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'RobotoMono-Italic',
  },
  accContainer: {
    flexDirection: 'row',
    marginTop: hp(2),
  },
  accText: {
    color: 'black',
    fontFamily: 'RobotoMono-Italic',
  },
  footerText: {
    color: 'red',
    fontFamily: 'RobotoMono-Italic',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  checkboxText: {
    color: 'black',
    fontFamily: 'RobotoMono-Italic',
    marginTop: 5,
  },
});

export default styles;
