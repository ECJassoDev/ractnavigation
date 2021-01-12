import React from 'react';
import {Text, Button, StyleSheet, View} from 'react-native';

const About = ({navigation, route}) => {
  //const goBakck = () => navigation.navigate('Inicio');

  const {name, payment} = route.params;

  return (
    <>
      <View style={styles.container}>
        <Text>{name}</Text>
        <Button title="Volver" onPress={() => navigation.goBack()} />
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

export default About;
