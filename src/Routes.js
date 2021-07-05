import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home'
import AboutScreen from './About'

const Stack = createStackNavigator();
export default function Routes(props) {
    return (
    <Stack.Navigator initialRouteName={props.initialRoute}>
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
