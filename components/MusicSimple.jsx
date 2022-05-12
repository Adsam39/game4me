import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import Header from './Header';
import Footer from './Footer';
import { RadioButton } from 'react-native-paper';

export default function MusicSimple(navigation) {

    const [sound, setSound] = useState();
    const [checked, setChecked] = useState('first');

  async function playSound() {
    console.log('Loading Sound');
    const {sound} = await Audio.Sound.createAsync(
      require('../assets/Nectar.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  async function stopSound() {
    console.log("Stop Sound");
    sound.stopAsync();
  }

  useEffect(() => {
    return sound ? () => {
      console.log('Unloading Sound');
      sound.unloadAsync();
    } : undefined;
  }, [sound]);

    function blindTest() {
        if(checked ==='Nectar') {
            return(
                Alert.alert('Game4Me', 'Bravo 🎉', [
                    {
                        text: 'OK', onPress: () => console.log('OK pressed'),
                    }
                ])
            )
        }
        else {
            return(
                Alert.alert('Game4me', 'Réessayes !!', [
                    {
                        text: 'OK', onPress: () => console.log('OK pressed'),
                    }
                ])
            )
        }
    }

  return (
    <View style={styles.container}>
        <Header name='Sam'/>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Button title='Play Sound' onPress={playSound} />
        <RadioButton 
        value='Nectar'
        status={checked === 'Nectar' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('Nectar')}/><Text>Nectar</Text>
        <RadioButton 
        value='La vie en rose'
        status={checked === 'La vie en rose' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('La vie en rose')}/><Text>La vie en rose</Text>
        <RadioButton 
        value='Au dd'
        status={checked === 'Au dd' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('Au dd')}/><Text>Au dd</Text>
        <Button title='Validate' onPress={blindTest}/>
        <Button title='Stop Sound' onPress={stopSound} />
        <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },
});
