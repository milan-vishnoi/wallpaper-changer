import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function PreviewScreen() {
    return (
        <View style={styles.container}>
        <Text style={styles.header}>Preview</Text>
        <Image
            source={{ uri: 'https://images.unsplash.com/photo-1521341562101-758553412a77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} // Placeholder image
            style={styles.image}
        />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1B949',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: '90%',
        height: '85%',
        borderRadius: 10,
    },
});