import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  const changeWallpaper = () => {
    console.log('Change Wallpaper');
    alert('Wallpaper Changed!');
  }; 
  
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallpaper Changer App!!</Text>
      <Button style={styles.button} title="Change Wallpaper" onPress={changeWallpaper} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },

});
