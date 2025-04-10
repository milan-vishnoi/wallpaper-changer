import React, { createContext, useState } from 'react';

export const WallpaperContext = createContext();

export function WallpaperProvider({ children }) {
  const [wallpapers, setWallpapers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [folderPath, setFolderPath] = useState(''); // State to hold the folder path

  const changeWallpaper = () => {
    if (wallpapers.length > 0) {
      setCurrentIndex(prevIndex => (prevIndex + 1) % wallpapers.length);
    } else {
      console.log('No wallpapers available to change.');
    }
  };
  const setSelectedWallpapers = (newWallpapers, path='') => {
    setWallpapers(newWallpapers);
    setCurrentIndex(0); // Reset to the first wallpaper when new wallpapers are set
    setFolderPath(path); // Set the folder path if provided
  };   

  return (
    <WallpaperContext.Provider
      value={{
        wallpapers,
        setSelectedWallpapers,
        currentWallpaper: wallpapers[currentIndex],
        changeWallpaper,
        folderPath,
      }}
    >
      {children}
    </WallpaperContext.Provider>
  );
}