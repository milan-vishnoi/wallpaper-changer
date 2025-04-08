import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';

export default function PreviewScreen() {
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Preview</Text>
        <Image
            source={{ uri: 'https://images.unsplash.com/photo-1521341562101-758553412a77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} // Placeholder image
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