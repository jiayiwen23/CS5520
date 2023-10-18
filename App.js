import React from 'react';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoalDetails from './components/GoalDetails';
import PressableButton from './components/PressableButton';
import { Ionicons } from '@expo/vector-icons'; 

const Stack = createNativeStackNavigator();
console.log(Stack);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#b8a" },
            headerTintColor: "white",
          }}>
        <Stack.Screen name="Home" component={Home} options={{headerTitle: 'All My Goals'}}/>
        <Stack.Screen name="Details" component={GoalDetails} options={
            ({ route }) => {
              return {
                title: route.params.pressedGoal.text,
                headerRight: ()=>{
                  return (
                    <PressableButton
                      defaultStyle={{ backgroundColor: "#bbb", padding: 5 }}
                       pressedStyle={{ opacity: 0.6 }}
                    >
                     <Ionicons name="trash" size={24} color="black" />
                    </PressableButton>
                  )
                }
              };
            }
        }/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}