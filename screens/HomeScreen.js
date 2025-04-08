import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen() {
    const changeWallpaper = () => {
        console.log('Change Wallpaper');
        alert('Wallpaper Changed!');
    };
    
    const selectFolder = () => {
        console.log('Select Folder');
        alert('Folder Selected!');
    };
    
    return (
        <View style={styles.container}>
        <Text style={styles.header}>Home</Text>
        <Button title="Change Wallpaper" onPress={changeWallpaper} />
        <View style={{ marginVertical: 20 }} />
        <Button title="Select Folder" onPress={selectFolder} />
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD8E6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});
