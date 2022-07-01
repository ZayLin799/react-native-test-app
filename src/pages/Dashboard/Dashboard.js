import {View, Text} from 'react-native';
import React, {useState, useContext} from 'react';
import styles from './styles';
import DevFooter from '@components/devfooter/devfooter';
import DashBoard from '@components/dashboard/dashboard';
import {AuthContext} from '@context/context';
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';
import LanguageModal from '@components/languagemodal/languagemodal';
import {useLocal} from '../../hook';

const Dashboard = () => {
  const [email, setEmail] = useState('');
  const {getAuth, lang, getLang} = useContext(AuthContext);
  const local = useLocal();

  const removeHandler = () => {
    RNSecureKeyStore.remove('@user.data').then(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      },
    );
    getAuth(false);
  };

  return (
    <View style={styles.maincontainer}>
      <LanguageModal
        Language={getLang}
        langde={local.language}
        langen={local.english}
        langmm={local.myanmar}
        close={local.close}
      />
      <DashBoard
        email={email}
        emailtext={local.email}
        title={local.dashboardtitle}
        about={local.about}
        logout={local.logout}
        action={removeHandler}
      />

      <DevFooter />
    </View>
  );
};

export default Dashboard;
