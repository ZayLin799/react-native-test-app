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
  },
  devTextb: {
    color: 'red',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: hp(1),
    marginTop: 22,
  },
  centeredViewSec: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: hp(1),
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
    borderRadius: 30,
    padding: 20,
    elevation: 1,
  },
  buttonOpen: {
    backgroundColor: '#2196F3',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginTop: 20,
  },
  textStyle: {
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
  },
  LangText: {
    color: 'black',
    borderRadius: 20,
    padding: 10,
    elevation: 1,
  },
});

export default styles;
