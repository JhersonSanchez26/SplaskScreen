import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from "./screen/SplashScreen"
import Login from "./screen/Login";


const Stack = createStackNavigator();

function MyStack() {
    return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Splash" component={SplashScreen} />
      <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
      </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

