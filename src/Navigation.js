import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';




  const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
          <Stack.Navigator>
        <Stack.Screen name="Home" component={BottomTab} />
      </Stack.Navigator>
      {/* Rest of your app code */}
      </NavigationContainer>
  );
}