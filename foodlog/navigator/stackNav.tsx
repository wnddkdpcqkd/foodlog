import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { home } from '../src/Home/home';
import { addStore } from '../src/Home/addStore';

const Stack = createStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddStore" component={addStore} 
        options={{
            headerShown : false
        }}
        />

      <Stack.Screen name="Home" component={home} 
        options={{
            headerShown : false
        }}
        />

    </Stack.Navigator>
  );
}