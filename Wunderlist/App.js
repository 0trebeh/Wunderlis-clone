import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import main from './app/main';
import profile from './app/profile/profile';

import notifications from './app/utils/notifications';

const Stack = createStackNavigator();

export default function App({ navigation }) {
    
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={main} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Profile" component={profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};