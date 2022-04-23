import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const LogIn = ({navigation}) => {
  const [showPassword, setShowPassword] = React.useState(false);


  function renderHeader() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 30,
          paddingHorizontal: 16,
        }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={30} color="white" />
        <Text style={{ color: "white", fontSize: 20, marginLeft: 10 }}>
          Log In
        </Text>
      </TouchableOpacity>
    );
  }

  

  function renderForm() {
    return (
      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        {/* Full Name */}
       

        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "white", fontSize: 20}}>Email Address:</Text>
          <TextInput
            style={{
              marginVertical: 5,
              borderBottomColor: "white",
              borderBottomWidth: 1,
              height: 40,
              color: "white",
            }}
           
            placeholder="Email Address"
            placeholderTextColor= {"white" }
            selectionColor= {"white" }
          />
        </View>
        {/* Phone Number */}
        <View style={{ marginTop: 25 }}>
          <Text style={{ color: "white", fontSize: 20}}>Phone Number</Text>

          <View style={{ flexDirection: "row" }}>
            {/* Country Code */}
            <View
              style={{
                width: 100,
                height: 50,
                marginHorizontal: 5,
                borderBottomColor: "white",
                borderBottomWidth: 1,
                flexDirection: "row",
              }}
            //   onPress={() => setModalVisible(true)}
            >
              <View style={{ justifyContent: "center" }}></View>
              <View
                style={{
                  justifyContent: "center",
                  marginLeft: 5,
                  marginTop: 10,
                  flexDirection: "row",
                }}
              >
                <Image
                  source={require("../Images/Ghana.png")}
                  resizeMode="contain"
                  style={{
                    marginLeft: 5,
                    width: 35,
                    height: 35,
                  }}
                />
                <Text style={{ color: "white", fontSize: 16, padding: 5 }}>
                  +233
                </Text>
              </View>

              <View style={{ justifyContent: "center", marginLeft: 5 }}>
                <Text style={{ color: "white" }}>
                  
                </Text>
              </View>
            </View>

            {/* Phone Number */}
            <TextInput
              style={{
                flex: 1,
                marginVertical: 20,
                borderBottomColor: "white",
                borderBottomWidth: 1,
                fontSize: 20,
                height: 30,
                color: "white",
              }}
              placeholder="012 345 6789"
              placeholderTextColor={"white"}
              selectionColor={"white"}
            />
          </View>
        </View>

        {/* Password */}
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "white", fontSize: 20}}>Password</Text>
          <TextInput
            style={{
              marginVertical: 15,
              borderBottomColor: "white",
              borderBottomWidth: 1,
              height: 40,
              color: "white",
            }}
            placeholder="Enter Password"
            placeholderTextColor={"white"}
            selectionColor={"white"}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
              bottom: 10,
              marginBottom: 15
            }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <AntDesign name="eye" size={25} color="white"  />
            {/* showPassword ? icons.disable_eye : icons.eye */}
          </TouchableOpacity>
        </View>
      </View>
    );
  }

 
  function renderButton() {
    return (
        <View style={{ margin: 15 }}>
            <TouchableOpacity
                style={{
                    height: 60,
                    backgroundColor: "black",
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={{ color: "white", fontSize: 20}}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "20" : null}
      style={{ flex: 1, backgroundColor: "#2F393D" }}
    >
      <ScrollView>
        {renderHeader()}
        {/* {renderLogo()} */}
       <View style={{ justifyContent: "center", alignItems: "center", marginTop: 70}}>
       <Text
          style={{
            color: "white",
            fontSize: 35,
      
          }}
        >
          Log In
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 25,
            justifyContent: "center", alignItems: "center",
            fontStyle: "italic",
          }}
        >
         Welcome
        </Text>
       </View>
        {renderForm()}
        {renderButton()}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LogIn;

const styles = StyleSheet.create({});
