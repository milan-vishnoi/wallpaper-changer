import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#ADD8E6' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarStyle: { backgroundColor: '#ADD8E6' },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
  
}

