import { Text, StyleSheet } from 'react-native'
import React from 'react'

const GoalItem = ( {goal} ) => {
  return (
    <Text style={styles.text}>{goal.text}</Text>
  )
}
const styles = StyleSheet.create({
  text: {
    color: "#a09",
    backgroundColor: "#aaa",
    borderRadius: 5,
    padding: 5,
    fontSize: 30,
    overflow: "hidden",
    marginBottom: 20,
  },
  contentContainerStyle: {
    alignItems: "center",
  },
});

export default GoalItem;