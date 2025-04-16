import React, { createContext, useState, useEffect } from 'react';
import * as Notifications from 'expo-notifications';

export const WallpaperContext = createContext();

export function WallpaperProvider({ children }) {
  const [wallpapers, setWallpapers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [folderPath, setFolderPath] = useState('');
  const [autoChange, setAutoChange] = useState(false);

  useEffect(  () => {
    let interval;
    if (autoChange && wallpapers.length > 1) {
      interval = setInterval( async () => {
        await changeWallpaper();
      }, 10000); // Change wallpaper every 5 seconds
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
      await scheduleNotification(wallpapers[currentIndex]);
    } else {
      console.log('No wallpapers available to change.');
    }
  };
  const setSelectedWallpapers = (newWallpapers, path='') => {
    setWallpapers(newWallpapers);
    setCurrentIndex(0); // Reset to the first wallpaper when new wallpapers are set
    setFolderPath(path); // Set the folder path if provided
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
      alert("Wallpaper changed successfully!");
    } catch (error) {
      console.error("Error scheduling notification:", error);
      alert("Failed to change wallpaper.", error.message);
    }

  };


  return (
    <WallpaperContext.Provider
      value={{
        wallpapers,
        setSelectedWallpapers,
        currentWallpaper: wallpapers[currentIndex],
        changeWallpaper,
        folderPath,
        autoChange,
        setAutoChange
      }}
    >
      {children}
    </WallpaperContext.Provider>
  );
}