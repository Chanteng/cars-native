import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import Button from "../Component/Bottom"

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const LogIn = ({ navigation }) => {
  function renderHeader() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("OrderScreen")}>
        <ImageBackground
          source={require("../Images/ModelS.jpeg")}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.text}>
            <Text
              style={{
                color: "white",
                fontSize: 40,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              ModelS
            </Text>
            <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
              GHc1000 - 1500
            </Text>
          </View>

          {/* <View style={styles.btn}>
            <TouchableOpacity>
              <Text>Place an order</Text>
            </TouchableOpacity>
          </View> */}
        </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }

  function renderHead() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../Images/ModelX.jpeg")}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.text}>
            <Text
              style={{
                color: "white",
                fontSize: 40,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              ModelX
            </Text>
            <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
              GHc2000 - 2500
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

  function image3() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../Images/ModelY.jpeg")}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.text}>
            <Text
              style={{
                color: "white",
                fontSize: 40,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              ModelY
            </Text>
            <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
              GHc3000 - 3500
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "20" : null}
      style={{ flex: 1 }}
    >
      <ScrollView>
        {renderHeader({Button})}
        {renderHead()}
        {image3()}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    // justifyContent: "center",
    height: 850,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    backgroundColor: "#000000c0",
    marginTop: 60,
    justifyContent: "center",
  },

  btn: {
    backgroundColor: "blue",
    marginTop: 500,
    alignItems: "center",
    justifyContent: "center",
    height: 40
  }
});
