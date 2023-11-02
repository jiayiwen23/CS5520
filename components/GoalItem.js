import { Text, StyleSheet } from 'react-native'
import React from 'react'
import PressableButton from './PressableButton';
import { Ionicons } from '@expo/vector-icons'; 

const GoalItem = ( {goal, deleteHandler, pressHandler} ) => {
  function deletePressed() {
    deleteHandler(goal.id);
  }

  function goalPressed(){
    pressHandler(goal);
  }
  return (
    // <Pressable onPress={function (){
    //   pressHandler(goal.id);
    // }}>为啥这样写
    <PressableButton 
        pressedFunction={goalPressed}
        // android_ripple={{ color: "#f00" }}
        defaultStyle={styles.goalContainer}
        pressedStyle={styles.goalPressed}
    >
      {/* <PressableButton
        pressedFunction={goalPressed}
        defaultStyle={styles.goalContainer}
        pressedStyle={({ pressed }) => [
          {opacity: pressed ? 0.2 : 1}, styles.goalPressed]}
      > */}
        <Text style={styles.text}>{goal.text}</Text>
      {/* <Button color='black' title='X' onPress={deletePressed} /> */}
        <PressableButton
          pressedFunction={deletePressed}
          defaultStyle={{ backgroundColor: "#bbb", padding: 5 }}
          pressedStyle={{ opacity: 0.6 }}
        >
        <Ionicons name="trash" size={24} color="black" />
      </PressableButton>
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
  goalPressed: {
    backgroundColor: "#add",
    opacity: 0.5,
  },
});

export default GoalItem;