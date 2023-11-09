import { View, Text, StyleSheet, Platform, useWindowDimensions, Dimensions } from 'react-native';
 
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

//const Header = () => {
export default function Header({appName}){//or Header({appName, version}){} 就不需要用props
  //可命名为props, a placeholder for an object, 随便命名
  const { width, height } = useWindowDimensions();
  const dynamicFontStyle = width < 400 ? 20 : 25;
  
  return (
    <View>
      <Text style={[styles.header, { fontSize: dynamicFontStyle }]}>
        Welcome to {appName}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: "darkslateblue",
    borderColor: "darkslateblue",
    borderWidth: Platform.OS === "ios" ? 0 : 3,
    fontSize: windowWidth < 400 ? 20 : 25,
    fontWeight: "bold",
    padding: 5,
  },
});