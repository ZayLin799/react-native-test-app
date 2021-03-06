import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  LangText: {
    color: 'black',
    borderRadius: 20,
    fontFamily: 'RobotoMono-Italic',
    padding: 10,
    elevation: 1,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 10,
  },
  centeredViewsec: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 15,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#2196F3',
  },
  buttonClose: {
    backgroundColor: '#ff0000',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'RobotoMono-Italic',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'RobotoMono-Italic',
  },
});

export default styles;
