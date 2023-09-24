import { View, Text } from 'react-native'
import React from 'react'

const Input = (changedHandler) => {
  const[enteredText, setEnterText] = useState("");
  function changeTextHandler(changedText){
    console.log(changedText);
    setText(changedText);
  }
  function confirmHandler(){
    changedHandler();
  }
  return (
    <View>
      <TextInput 
        style={styles.input} 
        onChangeText={changeTextHandler}
        value = {text}
      />
    </View>
  )
}

export default Input

rnfe