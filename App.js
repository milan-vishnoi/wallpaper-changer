import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import PreviewScreen from './screens/PreviewScreen';
import { WallpaperProvider } from './context/WallpaperContext';

export default function App() {
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      alert('Notification received in foreground:', notification);
    });
    return () => subscription.remove();
  }, []);

  return (
    <WallpaperProvider>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#EECE74' },
          headerTintColor: '#000',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarStyle: { backgroundColor: '#EECE74' },
        }}
      >
      
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            )}}/>
        <Tab.Screen name="Preview" component={PreviewScreen} options={{tabBarIcon : ({color}) => (
              <MaterialCommunityIcons name="image" color={color} size={26} />
        )}} />

      </Tab.Navigator>
    </NavigationContainer>
    </WallpaperProvider>
  );
  
}
