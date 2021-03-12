import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Text, View, Image, TextInput, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import styles from './login.css';

export default class login extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <StatusBar style="auto"/>
        <Image
          source={require("../../assets/fondo.png")}
          style={styles.image}
        />
        <Text
          style={styles.text1}
        >
          Get things done!
        </Text>

        <Text
          style={styles.text2}
        >
          Listical is an app for people who want to get things done. In an
          elegant way and with no delays.
        </Text>

        <View
          style={styles.input}
        >
          <Icon name="user" color="#d8412e" size={24} />
          <TextInput
            placeholder="Username"
            placeholderTextColor="#d8412e"
            style={styles.textInput}
          />
        </View>
        <View
          style={styles.input}
        >
          <Icon name="exclamationcircleo" color="#d8412e" size={24} />
          <TextInput
          secureTextEntry
            placeholder="Password"
            placeholderTextColor="#d8412e"
            style={styles.textInput}
          />
        </View>

        <View
          style={styles.buttonLogin}
        >
          <Text
            style={styles.textButton}
          >
            Log In
          </Text>
        </View>
        <Text
          onPress={() => navigate("Register")}
          style={styles.buttonNavigation}
        >
          New User
        </Text>
      </View>
    );
  } 
}