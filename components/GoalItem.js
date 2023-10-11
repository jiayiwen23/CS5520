import { Text, StyleSheet, Button, View, Pressable } from 'react-native'
import React from 'react'
import PressableButton from './PressableButton';

const GoalItem = ( {goal, deleteHandler, pressHandler} ) => {
  function deletePressed() {
    deleteHandler(goal.id);
  }

  function goalPressed(){
    pressHandler(goal.id);
  }
  return (
    // <Pressable onPress={function (){
    //   pressHandler(goal.id);
    // }}>为啥这样写
    <PressableButton 
        pressedFunction={goalPressed}
        defaultStyle={styles.goalContainer}
        pressedStyle={({ pressed }) => [
          {opacity: pressed ? 0.2 : 1}, styles.goalPressed]}
    >
      <PressableButton
        pressedFunction={goalPressed}
        defaultStyle={styles.goalContainer}
        pressedStyle={({ pressed }) => [
          {opacity: pressed ? 0.2 : 1}, styles.goalPressed]}
      >
        <Text style={styles.text}>{goal.text}</Text>
      </PressableButton>
      {/* <Button color='black' title='X' onPress={deletePressed} /> */}
    </PressableButton>
  )
}

const styles = StyleSheet.create({
  goalContainer: {
    flexDirection: "row",
    backgroundColor: "#aaa",
    marginBottom: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    color: "#a09",
    borderRadius: 5,
    padding: 5,
    fontSize: 30,
    overflow: "hidden",
    marginBottom: 20,
  },
});

export default GoalItem;