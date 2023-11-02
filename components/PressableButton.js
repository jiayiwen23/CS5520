import { Pressable, StyleSheet } from 'react-native'
import React from 'react'

const PressableButton = ({children, defaultStyle, pressedStyle, pressedFunction}) => {

  return (
    <Pressable onPress={pressedFunction} 
        style={({pressed})=> {//destructuring
            return [styles.styleByDefault, defaultStyle, pressed && pressedStyle];
        }}
    >
        {children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
    styleByDefault: {
      backgroundColor: "beige",
    },
  });

export default PressableButton