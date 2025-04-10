import React,{useState} from 'react';
import { StyleSheet, Text, SafeAreaView, View, Pressable, FlatList, Image, Pressable } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function HomeScreen() {
  const [wallpapers, setWallpapers] = useState([]);
    const changeWallpaper = () => {
        console.log('Change Wallpaper');
        alert('Wallpaper Changed!');
    };
    
    const selectFolder = async () => {
      try {
        const result = await DocumentPicker.getDocumentAsync({
          type: 'image/*',
          multiple: true,
          copyToCacheDirectory: true,
        });
    
        if (result?.assets) {
          const selectedWallpapers = result.assets.map(asset => asset.uri);
          setWallpapers(selectedWallpapers);
          console.log('Selected wallpapers:', selectedWallpapers);
        } else {
          console.log('Document selection cancelled');
        }
      }
      catch (error) {
        console.error('Error selecting images:', error);
      }

    };
    
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Home</Text>
        <Pressable style={styles.button} onPress={changeWallpaper}>
        <Text style={styles.buttonText}>Change Wallpaper</Text>
        </Pressable>
        <View style={{ marginVertical: 20 }} />
        <Pressable style={[styles.button, styles.secondaryButton]} onPress={selectFolder}>
        <Text style={styles.buttonText}>Select Folder</Text>
      </Pressable>
      { wallpapers.length > 0 && (
        <>
        <Text style={styles.previewLabel}>Selected Wallpapers:</Text>
        <FlatList
          data={wallpapers}
          keyExtractor={(item, index) => item + index}
          horizontal
          contentContainerStyle={{ marginTop: 20 }}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.imageThumbnail} />
          )}
        />
        </>

      )} 
      {
        wallpapers.length === 0 && (
          <Text style={{ color: '#222', fontSize: 16 }}>No wallpapers selected</Text>
      )

      }
        </SafeAreaView>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1B949',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#222'
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
      secondaryButton: {
        backgroundColor: '#2F6690',
      },
      previewLabel: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 30,
        color: '#333',
      },
      imageThumbnail: {
        width: 100,
        height: 160,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: '#ccc'
      },
});