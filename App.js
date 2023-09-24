import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState("");
  const name = "My Awesome App";

  function changedDataHandler(data){
    console.log("callback function called", data);
    //use the received data to update the text state variable
  }
  
  return (
    <View style={styles.container}>
      {/*<Text>Open up App.js to start working on {name}!!!!!</Text>*/}
      <Header appName = {name}/>
      <StatusBar style="auto" />
      <TextInput 
        style={styles.input} 
        onChangeText={changeTextHandler}
        value = {text}
      /> {/*self-closed, do not have children inside*/}
      <Text>{text}</Text>{/*Inside this show what is typing*/}
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
  input:{
    borderColor: "blue",
    borderWidth:2,
    width: '50%',
  }
});
