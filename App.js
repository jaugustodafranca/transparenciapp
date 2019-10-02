import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Logo from './src/assets/logo-transparenciApp.png';
import SearchAgency from './src/components/search-agency';
const App = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <SearchAgency />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 10,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default App;
