import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import MusicSimple from './components/MusicSimple';
import MusicMedium from './components/MusicMedium';
import MusicHard from './components/MusicHard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
          <Header name='Sam'/>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
          <Button title='Go to Simple Blind Test !' onPress={() => navigation.navigate('Musicsimple')}/>
          <Button title='Go to Medium Blind Test !' onPress={() => navigation.navigate('Musicmedium')}/>
          <Button title='Go to Hard Blind Test !' onPress={() => navigation.navigate('Musichard')}/>
          <Footer/>
        </View>
    );
  }

  function MusicSimpleScreen() {
    return (
      <MusicSimple/>
    )
  }

  function MusicMediumScreen() {
    return (
      <MusicMedium/>
    )
  }

  function MusicHardScreen() {
    return (
      <MusicHard/>
    )
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Musicsimple' component={MusicSimpleScreen}/>
        <Stack.Screen name='Musicmedium' component={MusicMediumScreen}/>
        <Stack.Screen name='Musichard' component={MusicHardScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#92a4ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
