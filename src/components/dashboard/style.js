import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(8),
  },
  title: {
    fontSize: 30,
    fontFamily: 'RobotoMono-Italic',
    color: 'black',
  },
  card_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card_template: {
    width: 250,
    height: 250,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text_container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 250,
    height: 30,
    top: 0,
    padding: 5,
    backgroundColor: '#2196F3',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  card_title: {
    color: '#fff',
  },
  text_card: {
    color: 'black',
  },
  email_container: {
    flexDirection: 'row',
    marginTop: hp(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: hp(4),
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
});

export default styles;
