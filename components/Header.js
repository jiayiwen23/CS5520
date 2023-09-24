import { View, Text } from 'react-native'
import React, { Children } from 'react'

//const Header = () => {
export default function Header(props){
    console.log(props.appName);
  return (
    <View>
      <Text>Welcome to {props.appName}</Text>
    </View>
  );
}

//export default Header