import React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';


export default function App() {

  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
      <Routes initialRoute="About"/>
      </View>
    </NavigationContainer>
  );
}