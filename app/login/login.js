import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";

export default class login extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ backgroundColor: "#FFF", height: "100%" }}>
          <StatusBar style="auto"/>
        <Image
          source={require("../images/fondo.png")}
          style={{ width: "100%", height: "20%" }}
        />
        <Text
          style={{
              marginTop:40,
            fontSize: 30,
            fontFamily: "SemiBold",
            alignSelf: "center",
          }}
        >
          Get things done!
        </Text>

        <Text
          style={{
            fontFamily: "SemiBold",
            marginHorizontal: 55,
            textAlign: "center",
            marginTop: 5,
            opacity: 0.4,
          }}
        >
          Listical is an app for people who want to get things done. In an
          elegant way and with no delays.
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 50,
            paddingHorizontal: 10,
            borderColor: "#d8412e",
            borderRadius: 23,
            paddingVertical: 2,
          }}
        >
          <Icon name="user" color="#d8412e" size={24} />
          <TextInput
            placeholder="Username"
            placeholderTextColor="#d8412e"
            style={{ paddingHorizontal: 70 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 15,
            paddingHorizontal: 10,
            borderColor: "#d8412e",
            borderRadius: 23,
            paddingVertical: 2,
          }}
        >
          <Icon name="exclamationcircleo" color="#d8412e" size={24} />
          <TextInput
          secureTextEntry
            placeholder="Password"
            placeholderTextColor="#d8412e"
            style={{ paddingHorizontal: 70 }}
          />
        </View>

        <View
          style={{
            marginHorizontal: 90,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            backgroundColor: "#d8412e",
            paddingVertical: 13,
            borderRadius: 23,
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "SemiBold",
            }}
          >
            Log In
          </Text>
        </View>
        <Text
          onPress={() => navigate("Register")}
          style={{
            alignSelf: "center",
            color: "#d8412e",
            fontFamily: "SemiBold",
            paddingVertical: 30,
          }}
        >
          New User
        </Text>
      </View>
    );
  }
}
