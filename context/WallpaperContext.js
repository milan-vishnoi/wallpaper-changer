import React, { createContext, useState, useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const WallpaperContext = createContext();

export function WallpaperProvider({ children }) {
  const [wallpapers, setWallpapers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [folderPath, setFolderPath] = useState('');
  const [autoChange, setAutoChange] = useState(false);

  useEffect(() => {
    const loadStoredData = async () => {
      try {
        const storedWallpapers = await AsyncStorage.getItem('wallpapers');
        const storedIndex = await AsyncStorage.getItem('currentIndex');
        const storedAutoChange = await AsyncStorage.getItem('autoChange');
        const storedFolderPath = await AsyncStorage.getItem('folderPath');

    
        if (storedWallpapers) {
          setWallpapers(JSON.parse(storedWallpapers));
        }
        if (storedIndex) {
          setCurrentIndex(parseInt(storedIndex, 10));
        }
        if (storedAutoChange) {
          setAutoChange(storedAutoChange === 'true');
        }
        if (storedFolderPath) {
          setFolderPath(storedFolderPath);
        }
      } catch (error) {
        alert("Error loading wallpapers from storage:", error);
      }
    };
    loadStoredData();
  }, []);

  useEffect(  () => {
    let interval;
    if (autoChange && wallpapers.length > 1) {
      interval = setInterval( async () => {
        await changeWallpaper();
      }, 10000); // Change wallpaper every 10 seconds
    }
    return () =>{ 
        if(interval) 
        clearInterval(interval)}; // Cleanup on unmount or when autoChange changes
  }, [autoChange, wallpapers]);

  useEffect(() => {
 (async () => {
      const { status} = await Notifications.getPermissionsAsync();
      if (status !== 'granted') {
        console.log('Notification permissions not granted');
        await Notifications.requestPermissionsAsync();
      }
    })();
  }, []);

  const changeWallpaper = async () => {
    if (wallpapers.length > 0) {
      setCurrentIndex(prevIndex => (prevIndex + 1) % wallpapers.length);
      AsyncStorage.setItem('currentIndex', ((currentIndex + 1) % wallpapers.length).toString());
      await scheduleNotification(wallpapers[currentIndex]);
    } else {
      console.log('No wallpapers available to change.');
    }
  };
  const setSelectedWallpapers = (newWallpapers, path='') => {
    setWallpapers(newWallpapers);
    AsyncStorage.setItem('wallpapers', JSON.stringify(newWallpapers)); 

    setCurrentIndex(0); // Reset to the first wallpaper when new wallpapers are set
    AsyncStorage.setItem('currentIndex', '0');

    setFolderPath(path); 
    AsyncStorage.setItem('folderPath',path);
  };

  const scheduleNotification = async (imageUri) => {
    alert("Setting the wallpaper");
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Wallpaper Changed",
          body: "Your wallpaper has been changed!",
          attachments: [{ uri: imageUri }],
        },
        trigger: {seconds: 5}, // Trigger immediately
      });
    } catch (error) {
      console.error("Error scheduling notification:", error);
      alert("Failed to change wallpaper.", error.message);
    }
  };

  const clearSelection = async () => {
    try {
      setWallpapers([]);
      setCurrentIndex(0);
      setFolderPath('');
      setAutoChange(false);
  
      await AsyncStorage.clear(); // Clear all stored data
    } catch (error) {
      alert("Error clearing selections:", error);
    }

  };
   const updateAutoChange = async (value) => {
    setAutoChange(value);
    await AsyncStorage.setItem('autoChange', value.toString());
    console.log(`Auto change wallpaper set to: ${value}`);  }


  return (
    <WallpaperContext.Provider
      value={{
        wallpapers,
        setSelectedWallpapers,
        currentWallpaper: wallpapers[currentIndex],
        changeWallpaper,
        folderPath,
        autoChange,
        setAutoChange : updateAutoChange,
        clearSelection
      }}
    >
      {children}
    </WallpaperContext.Provider>
  );
}