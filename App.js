import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { MyButton } from './components/MyButton'

export default function App() {

    const [clicks, setClicks] = useState(0);
    const addOne = () => { setClicks(clicks + 1); };
    const subOne = () => { setClicks(clicks - 1); };
    const reset = () => { setClicks(0); };

  return (
      <View style={styles.container}>
          <View style={styles.halfscreen }>
              <Text style={styles.text}>There have been</Text>
              <Text style={styles.text}>{clicks}</Text>
              <Text style={styles.text}>clicks</Text>
          </View>
          <View style={styles.halfscreen}>
              <MyButton style={styles.myButton} onPress={addOne} label='Add' />
              <MyButton style={[styles.myButton, {backgroundColor:'red'}]} onPress={subOne} label='Subtract' />
              <MyButton style={[styles.myButton, {backgroundColor:'yellow'}]} onPress={reset} label='Reset' />
          </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    halfscreen: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    myButton: {
        width: '80%',
        padding: 10,
        margin: 10,
        borderRadius: 15,
        backgroundColor: 'lightblue',
    },
    text: {
        fontSize: 24,
        fontWeight:'normal',
        fontVariant: 'small-caps',
	},
});
