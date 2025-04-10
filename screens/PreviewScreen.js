import React, {useContext} from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';
import { WallpaperContext } from '../context/WallpaperContext';

export default function PreviewScreen() {
    const { currentWallpaper } = useContext(WallpaperContext);
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Preview</Text>
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
});