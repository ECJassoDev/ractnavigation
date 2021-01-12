import React from 'react';
import {Text, Button, StyleSheet, View} from 'react-native';

const Home = ({navigation}) => {
  const information = {
    name: 'Emanuel',
    payment: 500,
  };

  const goToAbout = () => navigation.navigate('Nosotros', information);

  return (
    <>
      <View style={styles.container}>
        <Text>Home</Text>
        <Button title="Ir a nosotros" onPress={() => goToAbout()} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
