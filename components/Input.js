import {
  Button,
  Modal,
  StyleSheet,
  Image,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../colors";//from component folder up ..

// receive the modalIsvisible prop
const Input = ({ changedHandler, modalVisiblity, hideModal }) => {
  const [enteredText, setEnteredText] = useState("");
  //update this callback function to receive the changed text and store it in text state variable
  function changeTextHandler(changedText) {
    console.log(changedText);
    setEnteredText(changedText);
  }

  function cancelHandler() {
    hideModal();
  }
  function confirmHandler() {
    // call a function that is passed to me from App.js and pass the enteredText via it
    changedHandler(enteredText);
    //clear the textinput
    setEnteredText("");
  }
  return (
    // use the new peop to show the modal
    <Modal visible={modalVisiblity}>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2617/2617812.png",
          }}
          style={styles.image}
        />
        <Image source={require("../assets/goal.png")} style={styles.image} />

        <TextInput
          style={styles.input}
          onChangeText={changeTextHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color="red" title="Cancel" onPress={cancelHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={confirmHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "purple",
    borderBottomWidth: 2,
    width: 200,
  },
  container: {
    flex: 1,
    backgroundColor: colors.modal,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  buttonContainer: { flexDirection: "row", marginTop: 15 },
  button: {
    marginHorizontal: 10,
    width: "30%",
  },
});