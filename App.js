import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login/Login'
import Info from './components/SignUp/Info'
import Credentials from './components/SignUp/Credentials'
import Success from './components/SignUp/FinishScreen'
import Home from './components/Home/Home'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen 
          name = "Login"
          component = {Login}
        />
        <Stack.Screen 
          name="Info"
          component = {Info}
        />
        <Stack.Screen 
          name="Credentials"
          component = {Credentials}
        />
        <Stack.Screen 
          name="Success"
          component = {Success}
        />
        <Stack.Screen 
          name="Home"
          component = {Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

