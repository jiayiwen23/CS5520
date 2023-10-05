import { Text, StyleSheet, Button, View } from 'react-native'
import React from 'react'

const GoalItem = ( {goal, deleteHandler} ) => {
  function deletePressed() {
    deleteHandler(goal.id);
  }
  return (
    <View style={styles.goalContainer}>
      <Text style={styles.text}>{goal.text}</Text>
      <Button color='black' title='X' onPress={deletePressed} />
    </View>
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
    backgroundColor: "#aaa",
    borderRadius: 5,
    padding: 5,
    fontSize: 30,
    overflow: "hidden",
    marginBottom: 20,
  },
});

export default GoalItem;