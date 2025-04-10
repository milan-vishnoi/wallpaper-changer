import React, { createContext, useState } from 'react';

export const WallpaperContext = createContext();

export function WallpaperProvider({ children }) {
  const [wallpapers, setWallpapers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeWallpaper = () => {
    if (wallpapers.length > 0) {
      setCurrentIndex(prevIndex => (prevIndex + 1) % wallpapers.length);
    } else {
      console.log('No wallpapers available to change.');
    }
  };
  const setSelectedWallpapers = (newWallpapers) => {
    setWallpapers(newWallpapers);
    setCurrentIndex(0); // Reset to the first wallpaper when new wallpapers are set
    console.log('Wallpapers updated:', newWallpapers);
  };   

  return (
    <WallpaperContext.Provider value={{ wallpapers, setSelectedWallpapers, currentWallpaper: wallpapers[currentIndex], changeWallpaper }}>
      {children}
    </WallpaperContext.Provider>
  );
}