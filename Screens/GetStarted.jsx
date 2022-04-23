import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';

const GetStarted = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20, backgroundColor: "white" }}>
      <View style={styles.img}>
        <Image
          style={{ height: 650, width: 450 }}
          source={require("../Images/Model3.jpeg")}
        />
      </View>
      <View style={styles.text}>
        <Text style={{fontSize: 25}}>Get Started</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
        <AntDesign name="arrowright" size={35} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  img: {
    flex: 1,
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
      flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 50
  },
});
