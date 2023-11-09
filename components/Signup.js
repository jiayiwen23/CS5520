import { View, Text, TextInput, Alert, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firebase/auth';
import { colors } from '../colors';

const Signup = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleLogin=()=>{
      navigation.replace("Login");
    }

    const handleRegister=async()=>{
      if (!email || !password || !confirmPassword){
        Alert.alert("The email address should not be empty");
        return;
      }
      if (password != confirmPassword){
        Alert.alert("Passwords should be equal");
        return;
      }
      try{
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCred);
      } catch (err){
        if(err.code === "auth/invalid-email"){
          Alert.alert("Invalid credentials");
        } else if (err.code === "auth/weak-password") {
          Alert.alert("password should be minimum 6 characters");
        }
      }
    };

  return (
    <View>
      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(changedText)=>{setEmail(changedText)}}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        secureTextEntry={true}
        onChangeText={(changedText)=>{setPassword(changedText)}}
      />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        value={confirmPassword}
        secureTextEntry={true}
        onChangeText={(changedText)=>{setConfirmPassword(changedText)}}
      />
    
      <Button title="Register" onPress={handleRegister} />
      <Button title="Already registered? Login" onPress={handleLogin} />
    </View>
  )
}

export default Signup;

const styles = StyleSheet.create({
    label: {
      fontSize: 18,
      color: colors.information,
    },
    input: {
      fontSize: 18,
      borderBottomColor: colors.borderBottom,
      borderBottomWidth: 2,
      width: "90%",
      marginTop: 10,
      marginBottom: 10,
      textAlign: 'center',
    },
});