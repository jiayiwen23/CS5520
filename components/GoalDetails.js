import { View, Text, Button } from 'react-native'
import React from 'react'

export default function GoalDetails({navigation, route}) {
  //console.log(route.params.pressedGoal.text);
  return (
    <View>
        {route.params ? (<Text>{route.params.pressedGoal.text}</Text>) : (<Text>No extra data</Text>)}
        {/* <Button title=" More" onPress={() => navigation.navigate("Details")} /> */}
    </View>
  );
}