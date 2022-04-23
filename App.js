import "react-native-gesture-handler";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import Home from "./Screens/Home";
import GetStarted from "./Screens/GetStarted";
import LogIn from "./Screens/LogIn";
import SignUp from "./Screens/SignUp";
import OrderScreen from "./Screens/OrderScreen";



import { NavigationContainer } from "@react-navigation/native";


import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}  >
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
     
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
