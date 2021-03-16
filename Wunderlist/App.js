import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import main from './app/main';
import profile from './app/profile/profile';
import prueba from './app/profile/prueba';
import prueba2 from './app/profile/prueba2';
import login from './app/login/login'
import register from './app/register/register'
import inbox from './app/inbox/inbox'
import tags from './app/tags/tags'

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
        <Stack.Screen name="Inbox" component={inbox} />
        <Stack.Screen name="tags" component={tags} />
        <Stack.Screen name="prueba" component={prueba} />
        <Stack.Screen name="prueba2" component={prueba2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}; 