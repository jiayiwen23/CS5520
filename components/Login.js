import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { colors } from '../colors';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signupHandler = () => {
        navigation.replace("Signup");
    };
    const loginHandler = async () => {
        if (!email || !password) {
          Alert.alert("Fields should not be empty");
          return;
        }
        try {
          const userCred = await signInWithEmailAndPassword(auth, email, password);
          console.log(userCred);
        } catch (err) {
          console.log(err);
          if (err.code === "auth/invalid-login-credentials") {
            Alert.alert("invalid credentials");
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

      <Button title="Login" onPress={loginHandler} />
      <Button title="New user? Create an account" onPress={signupHandler} />
    </View>
  )
}

export default Login;

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