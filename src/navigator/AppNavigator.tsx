import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomNavigator } from './BottomNavigator';

export function AppNavigator() {

  const Stack = createNativeStackNavigator<any>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen"  options={{headerShown: false}} component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
