import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './views/home';
import About from './views/about';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#F4511E',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="Inicio"
            component={Home}
            options={{
              title: 'Pandora',
            }}
          />
          <Stack.Screen
            name="Nosotros"
            component={About}
            options={({route}) => ({
              title: route.params.name,
            })}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
