import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  FlatList,
} from "react-native";
import Header from "./Header";
import { useEffect, useState } from "react";
import Input from "./Input";
import GoalItem from "./GoalItem";
import { database } from "../firebase/firebaseSetup";
import { deleteFromDB, writeToDB } from "../firebase/firestoreHelper";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export default function Home({ navigation }) {
  console.log(database);
  const [text, setText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);
  const name = "My Awesome App";

  useEffect(() => {
    const q = query(collection(database, "goals", where("user", "==", auth.currentUser.uid)));

    const unsubscribe = //onSnapshot listens for changes to a particular query and executes a callback when the data changes
    onSnapshot(q, (querySnapshot) => {
        //the callback provided to onSnapshot receives a querySnapshot that represents the current state of the query
        let newArray = [];
        if (!querySnapshot.empty) {
          // use a for loop to call .data() on each item of querySnapshot.docs
          querySnapshot.docs.forEach((docSnap) => {
            newArray.push({ ...docSnap.data(), id: docSnap.id });
          });
          // This also works, because .forEach method of querysnapshot enumerated all the documentsnapshots in it
          // querySnapshot.forEach((docSnap) => {
          //   newArray.push({ ...docSnap.data(), id: docSnap.id });
          // });
          // for (let i = 0; i < querySnapshot.docs.length; i++) {
          //   newArray.push(querySnapshot.docs[i].data());
          // }
        }
        setGoals(newArray);
      },
      (err) => {
        console.log(err);
        if (err.code === "permission-denied") {
          Alert.alert("You don't have permission or there is an error in your querys");
        }
      }
    );
    return () => {
      unsubscribe();//cleanup function
      //when the component is about to unmount or when the dependencies change, React will execute it
    };
  }, []);
  
  function changedDataHandler(data) {
    //receive data back from Input, store the data as text property of an object
    const newGoal = { text: data };
    // console.log("callback function called ", data);
    // setGoals((prevGoals)=>{
    //   return [...prevGoals, newGoal];
    // });

    //write newGoal to db
    writeToDB(newGoal);
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
  deleteFromDB(deletedId);
  // setGoals((prevGoals)=>{
  //   return prevGoals.filter((goal)=>{
  //     return goal.id != deletedId;
  //     });
  //   });
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