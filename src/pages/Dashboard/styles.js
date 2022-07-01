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
    bottom: 0,
    padding: 5,
    backgroundColor: '#2196F3',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  card_title: {
    color: 'black',
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
});

export default styles;
