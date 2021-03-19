import React from "react";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import styles from "./register.css";

export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: "",
      confirmPassword: "",
    };
  }

  register = async () => {
    const res = await axios
      .post("https://listical.herokuapp.com/api/users/", {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      });

    this.props.navigation.replace("Home");
    try {
      console.log("estas dentroo");
      console.log(res.data[0]);
      await AsyncStorage.setItem("user", JSON.stringify(res.data[0]));
      this.props.navigation.replace("Home");
    } catch (e) {
      return;
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={70}
        behavior="padding"
        style={{ flex: 1 }}
        enabled={true}
      >
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Image
            source={require("../../assets/fondo.png")}
            style={styles.image}
          />
          <Text style={styles.text1}>Get things done!</Text>

          <Text style={styles.text2}>
            Listical is an app for people who want to get things done. In an
            elegant way and with no delays.
          </Text>

          <View style={styles.input}>
            <Icon name="user" color="#d8412e" size={24} />
            <TextInput
              placeholder="Username"
              placeholderTextColor="#d8412e"
              style={{ paddingHorizontal: 70 }}
              onChangeText={(username) => this.setState({ username: username })}
            />
          </View>
          <View style={styles.input}>
            <Icon name="mail" color="#d8412e" size={24} />
            <TextInput
              placeholder="E-mail"
              placeholderTextColor="#d8412e"
              style={{ paddingHorizontal: 82 }}
              onChangeText={(email) => this.setState({ email: email })}
            />
          </View>
          <View style={styles.input}>
            <Icon name="exclamationcircleo" color="#d8412e" size={24} />
            <TextInput
              secureTextEntry
              placeholder="Password"
              placeholderTextColor="#d8412e"
              style={{ paddingHorizontal: 70 }}
              onChangeText={(password) => this.setState({ password: password })}
            />
          </View>
          <View style={styles.input}>
            <Icon name="exclamationcircleo" color="#d8412e" size={24} />
            <TextInput
              secureTextEntry
              placeholder="Confirm Password"
              placeholderTextColor="#d8412e"
              style={{ paddingHorizontal: 48 }}
              onChangeText={(confirmPassword) =>
                this.setState({ confirmPassword: confirmPassword })
              }
            />
          </View>

          <TouchableOpacity
            onPress={() => this.register()}
            disabled={(this.state.username == "") | (this.state.password == "")}
            style={
              this.state.username == "" ||
              this.state.password == "" ||
              this.state.email == "" ||
              this.state.confirmPassword == ""
                ? styles.buttonRegisterDisabled
                : styles.buttonRegister
            }
          >
            <Text style={styles.textButton}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginVertical: 30 }}
            onPress={() => navigate("Login")}
          >
            <Text style={styles.buttonNavigation}>Already a user</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
