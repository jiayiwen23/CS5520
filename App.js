import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoalDetails from './components/GoalDetails';
import PressableButton from './components/PressableButton';
import { Ionicons } from '@expo/vector-icons'; 
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./firebase/firebaseSetup";
import Login from './components/Login';
import Signup from './components/Signup';

const Stack = createNativeStackNavigator();
const AuthStack = ( 
<>
   <Stack.Screen name="Login" component={Login} />
   <Stack.Screen name="Signup" component={Signup} />
</>
);
const AppStack = (<>
    <Stack.Screen name="Home" component={Home} options={{headerTitle: 'All My Goals'}}/>
        <Stack.Screen name="Details" component={GoalDetails} options={
            ({ route }) => {//destructuring 'route' from a long object (include navigation, route)
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
</>
);
  
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      console.log("User:", user);
      if (user != null){
        setIsLoggedIn(true);
      }
      else{
        setIsLoggedIn(false);
      }
    });
  }, []);//empty dependency - only excecute once

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup"
          screenOptions={{
            headerStyle: { backgroundColor: "#b8a" },
            headerTintColor: "white",
          }}>

       {isLoggedIn? AppStack: AuthStack}

      </Stack.Navigator>
    </NavigationContainer>
  )
}