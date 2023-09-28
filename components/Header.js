import { View, Text } from 'react-native';
 
//const Header = () => {
export default function Header({appName}){//or Header({appName, version}){} 就不需要用props
  //可命名为props, a placeholder for an object, 随便命名
  
  console.log(appName);//print the field of an object
  return (
    <View>
      <Text>Welcome to {appName}!</Text>
    </View>
  );
}

//export default Header;