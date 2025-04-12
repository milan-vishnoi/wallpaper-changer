import React, {useContext} from 'react';
import { SafeAreaView, Text, Image, StyleSheet, Pressable } from 'react-native';
import { WallpaperContext } from '../context/WallpaperContext';
import WallpaperManager from 'react-native-set-wallpaper';

export default function PreviewScreen() {
    const { currentWallpaper } = useContext(WallpaperContext);
    const setAsWallpaper = () => {
        if(currentWallpaper) {
            WallpaperManager.setWallpaper({uri: currentWallpaper}, (response)=> {
                if (response.status === 'success') {
                    console.log('Wallpaper set result:', response);
                    alert('Wallpaper set successfully!');
                } else {
                    alert('Failed to set wallpaper.');
                }
            });
        } else {
            alert('No wallpaper selected to set.');
        }
    };
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Preview</Text>
        <Pressable style={styles.button} onPress={setAsWallpaper}>
            <Text style={styles.buttonText}>Set as Wallpaper</Text>
        </Pressable>
        <Image
            source={{ uri: currentWallpaper }} // Placeholder image
            style={styles.image}
        />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1B949',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#222'
    },
    image: {
        width: '90%',
        aspectRatio: 9/16,
        borderRadius: 12,
        backgroundColor: '#ccc',
    },
    button: {
        backgroundColor: '#3E3E3E',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 12,
        width: '80%',
        alignItems: 'center',
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
});