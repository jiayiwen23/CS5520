import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import Input from './components/Input';

export default function App() {
  const [text, setText] = useState("");

  const name = "My Awesome App";

  function changedDataHandler(data){
    console.log("callback function called", data);
    //use the received data to update the text state variable
    setText(data);
  }

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on {name}!</Text> */}
      <Header appName = {name} />
      <StatusBar style = "auto" />
      <Input changeHandler = {changedDataHandler} />
      <Text>{text}</Text>{/*Inside this show what user is typing*/}
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
});
