import { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import PressableButton from './PressableButton';
import GoalUsers from './GoalUsers';

export default function GoalDetails({navigation, route}) {
  //console.log(route.params.pressedGoal.text);
  const [isWarned, setIsWarned] = useState(false);

  // everytime render happen, the function is called
  useEffect(()=>{
    navigation.setOptions({
      headerRight: () => {
        return (
          <PressableButton
            pressedFunction={()=>{
              console.log("warning pressed");
              setIsWarned(True);
            }}
            defaultStyle={{ backgroundColor: "#bbb", padding: 5 }}
            pressedStyle={{ opacity: 0.6 }}
        >
          <Ionicons name="warning" size={24} color="black" />
        </PressableButton>
      );
     },
    })
  }, [navigation]);// Specifying the dependency array for the useEffect hook

  return (
    <View>
        {route.params ? (<Text>{route.params.pressedGoal.text}</Text>) : (<Text>No extra data</Text>)}
        {isWarned && 
          <Button title=" More" onPress={() => navigation.navigate("Details")} />}
          <GoalUsers />
    </View>
  );
}