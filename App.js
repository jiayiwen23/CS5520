import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import Input from "./components/Input";

export default function App() {
  const [text, setText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);
  const name = "My Awesome App";

  function changedDataHandler(data) {
    const newGoal = { text: data, id: Math.random() };
    console.log("callback function called ", data);
    setGoals((prevGoals)=>{return [...prevGoals, newGoal]});
    setText(data);//use the received data to update the text state variable
    makeModalInvisible();
  }

  function makeModalVisible() {
    setIsModalVisible(true);
  }

  function makeModalInvisible() {
    setIsModalVisible(false);
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
        {/* use the map function to iterate over the goal array*/}
  {/* each item in the goal array is an object, and render the value of 'text' property in <Text> */}
        <ScrollView bounces={false}
          contentContainerStyle={styles.contentContainerStyle}>
          {goals.map((goal, id) => (
            //换行 wrap each <Text> element in a <View> component
            <View key={id}>
              <Text style={styles.text}>{goal.text}</Text>
            </View>
          ))}
        </ScrollView>
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