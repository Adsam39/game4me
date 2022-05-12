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
      require('../assets/Ghost.mp3')
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
        if(checked ==='Skip the use') {
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
        value='Superbus'
        status={checked === 'Superbus' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('Superbus')}/><Text>Superbus</Text>
        <RadioButton 
        value='Skip the use'
        status={checked === 'Skip the use' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('Skip the use')}/><Text>Skip the use</Text>
        <RadioButton 
        value='Shaka ponk'
        status={checked === 'Shaka ponk' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('Shaka ponk')}/><Text>Shaka ponk</Text>
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
