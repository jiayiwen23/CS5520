import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  FlatList,
} from "react-native";
import Header from "./Header";
import { useState } from "react";
import Input from "./Input";
import GoalItem from "./GoalItem";

export default function Home({ navigation }) {
  const [text, setText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);
  const name = "My Awesome App";

  function changedDataHandler(data) {
    //receive data back from Input, store the data as text property of an object
    const newGoal = { text: data, id: Math.random() };
    console.log("callback function called ", data);
    setGoals((prevGoals)=>{
      return [...prevGoals, newGoal];
    });//arrow function
    setText(data);//use the received data to update the text state variable
    makeModalInvisible();
  }

  function makeModalVisible() {
    setIsModalVisible(true);
  }
  function makeModalInvisible() {
    setIsModalVisible(false);
  }

  function goalDeleteHandler(deletedId){
    console.log("I was deleted", deletedId);
  //   const newArray = goals.filter((goal)=>{
  //   return goal.id != deletedId;
  // })
  //   setGoals(newArray);
  setGoals((prevGoals)=>{
    return prevGoals.filter((goal)=>{
      return goal.id != deletedId;
      });
    });
  }

  function goalPressed(pressedGoal){
    console.log("pressed", pressedGoal);
    navigation.navigate("Details", {pressedGoal});//or {goalObject: pressedGoal} 加了variable name
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Open up App.js to start working on {name} !</Text> */}
      {/* render Header component here and pass a prop to it with the name variable as value */}
      <View style={styles.topContainer}>
        <Header appName={name} />
        <StatusBar style="auto" />
        {/* pass another prop to Input with the modalIsVisible as its value */}
        <Input
          changedHandler={changedDataHandler}
          modalVisiblity={isModalVisible}
          hideModal={makeModalInvisible}
        />
        <Button title="Add a goal" onPress={makeModalVisible} />
        {/* Inside this text show what user is typing */}
      </View>
      <View style={styles.bottomContainer}>
        <FlatList 
          contentContainerStyle={styles.contentContainerStyle} 
          data={goals} 
          renderItem={({item})=>{
            return <GoalItem goal={item} deleteHandler={goalDeleteHandler} pressHandler={goalPressed}/>;
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //lignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "#dcd",
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
  contentContainerStyle: {
    alignItems: "center",
  },
});