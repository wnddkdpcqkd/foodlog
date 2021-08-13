import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { home } from '../src/Home/home';

const Stack = createStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={home} 
        options={{
            headerShown : false
        }}
        />
    </Stack.Navigator>
  );
}