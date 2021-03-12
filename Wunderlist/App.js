import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import main from './app/main';
import profile from './app/profile/profile';
import login from './app/login/login'
import register from './app/register/register'

import notifications from './app/utils/notifications';

const Stack = createStackNavigator();

export default function App({ navigation }) {
    
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={main} />
        <Stack.Screen name="Profile" component={profile} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Register" component={register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};